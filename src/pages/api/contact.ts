import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  website: z.string().optional(), // Honeypot field
})

// Rate limiter helper
function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    return false
  }

  limit.count++
  return true
}

// Get client IP
function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  const ip = forwarded
    ? (typeof forwarded === 'string' ? forwarded : forwarded[0]).split(',')[0]
    : req.socket.remoteAddress || 'unknown'
  return ip
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Check rate limit
    const clientIp = getClientIp(req)
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
      })
    }

    // Validate input
    const data = contactSchema.parse(req.body)

    // Honeypot check
    if (data.website) {
      return res.status(400).json({ error: 'Invalid submission' })
    }

    // Here you would send the email using a service like SendGrid, Resend, etc.
    // For now, we'll just log it (in production, implement email sending)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Example with SendGrid (uncomment and configure if using):
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: 'seu@email.com',
      from: 'noreply@seusite.com',
      subject: `Nova mensagem de ${data.name}`,
      text: `Nome: ${data.name}\nEmail: ${data.email}\n\nMensagem:\n${data.message}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    await sgMail.send(msg)
    */

    // For MVP, you can use Formspree or similar service
    // Just redirect to their API or use webhook

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Dados inválidos',
        details: error.errors,
      })
    }

    return res.status(500).json({
      error: 'Erro ao processar sua mensagem. Tente novamente.',
    })
  }
}
