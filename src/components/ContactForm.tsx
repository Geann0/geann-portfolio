'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setStatus('success')
      reset()
      
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-2xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Tem um projeto em mente? Entre em contato e vamos construir algo
            incrível juntos.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-xl bg-white p-8 shadow-lg"
        >
          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Nome
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Mensagem
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
              placeholder="Conte-me sobre seu projeto..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'loading' ? (
              'Enviando...'
            ) : (
              <>
                <Send size={20} />
                Enviar Mensagem
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-800">
              <CheckCircle size={20} />
              <p className="text-sm font-medium">
                Mensagem enviada com sucesso! Retornarei em breve.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-800">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">
                Erro ao enviar mensagem. Tente novamente.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
