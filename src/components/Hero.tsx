import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import siteConfig from '@/../../data/site.config.json'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pb-20 pt-32 lg:px-8 lg:pt-40">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl xl:text-6xl">
            Olá, sou{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {siteConfig.author.display_name}
            </span>
          </h1>
          <p className="mb-2 text-xl font-medium text-slate-700 lg:text-2xl">
            {siteConfig.author.title}
          </p>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
            {siteConfig.author.short_bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              Ver Projetos
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={siteConfig.author.resume_url}
              download
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:border-primary-600 hover:text-primary-600"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="animate-slide-up flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-20 blur-2xl"></div>
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl lg:h-96 lg:w-96">
              <Image
                src={siteConfig.author.profile_image_url}
                alt={siteConfig.author.display_name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
