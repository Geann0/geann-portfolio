import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  id: string
  slug: string
  title: string
  short_description: string
  cover_image: string
  tags: string[]
  repo_url?: string
  demo_url?: string | null
  featured?: boolean
}

export default function ProjectCard({
  slug,
  title,
  short_description,
  cover_image,
  tags,
  repo_url,
  demo_url,
  featured,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl">
      {featured && (
        <div className="absolute left-4 top-4 z-10 rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white">
          Destaque
        </div>
      )}

      {/* Image */}
      <Link href={`/projects/${slug}`}>
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <Image
            src={cover_image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors hover:text-primary-600">
            {title}
          </h3>
        </Link>

        <p className="mb-4 line-clamp-2 text-slate-600">{short_description}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {repo_url && (
            <a
              href={repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
            >
              <Github size={16} />
              Código
            </a>
          )}
          {demo_url && (
            <a
              href={demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
