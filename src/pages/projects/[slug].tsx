import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import siteConfig from '@/../../data/site.config.json'
import projectsData from '@/../../data/projects.json'

interface ProjectPageProps {
  project: (typeof projectsData)[0]
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>
          {project.title} | {siteConfig.site_title}
        </title>
        <meta name="description" content={project.short_description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.short_description} />
        <meta property="og:image" content={project.cover_image} />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Voltar aos projetos
            </Link>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-4">
                  {project.featured && (
                    <span className="rounded-full bg-accent-600 px-3 py-1 text-xs font-semibold text-white">
                      Destaque
                    </span>
                  )}
                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <Calendar size={16} />
                    {project.year}
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                  {project.title}
                </h1>

                <p className="mb-8 text-xl leading-relaxed text-slate-300">
                  {project.short_description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-slate-900"
                    >
                      <Github size={20} />
                      Ver Código
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700"
                    >
                      <ExternalLink size={20} />
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl lg:h-auto">
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Sobre o Projeto
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  {project.long_description}
                </p>
              </div>

              {/* Highlight Achievement */}
              {project.highlight_achievement && (
                <div className="mb-12 rounded-xl bg-primary-50 p-6">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    🎯 Destaque
                  </h3>
                  <p className="text-slate-700">{project.highlight_achievement}</p>
                </div>
              )}

              {/* Responsibilities */}
              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">
                    Responsabilidades
                  </h2>
                  <ul className="space-y-3">
                    {project.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-600"
                      >
                        <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600"></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Stack Tecnológica
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {Object.entries(project.tech_stack).map(([category, techs]) => (
                    <div key={category} className="rounded-lg bg-slate-50 p-4">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-700">
                        {category}
                      </h3>
                      <ul className="space-y-2">
                        {Array.isArray(techs) &&
                          techs.map((tech) => (
                            <li key={tech} className="text-sm text-slate-600">
                              {tech}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/projects?tag=${encodeURIComponent(tag)}`}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary-600 hover:text-white"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-2xl font-bold text-slate-900">
                  Galeria
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 overflow-hidden rounded-xl shadow-lg"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectsData.find((p) => p.slug === params?.slug)

  if (!project) {
    return { notFound: true }
  }

  return {
    props: { project },
  }
}
