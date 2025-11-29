import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import siteConfig from '@/../../data/site.config.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              {siteConfig.author.display_name}
            </h3>
            <p className="text-sm text-slate-600">
              {siteConfig.author.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-700">
              Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-700">
              Conecte-se
            </h4>
            <div className="mb-4 flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 transition-all hover:bg-primary-600 hover:text-white hover:shadow-md"
                    aria-label={platform}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-primary-600"
            >
              <Mail size={16} />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            © {currentYear} {siteConfig.author.display_name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
