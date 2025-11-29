import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import siteConfig from '@/../../data/site.config.json'
import projectsData from '@/../../data/projects.json'

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = Array.from(
    new Set(projectsData.flatMap((project) => project.tags))
  ).sort()

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData

  return (
    <>
      <Head>
        <title>Projetos | {siteConfig.site_title}</title>
        <meta
          name="description"
          content={`Explore os projetos de ${siteConfig.author.display_name} - aplicações web modernas com TypeScript, Next.js e muito mais.`}
        />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Meus Projetos
              </h1>
              <p className="text-xl text-slate-700">
                Uma coleção de projetos que demonstram minhas habilidades e
                paixão por desenvolvimento web
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-slate-200 bg-white py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-700">
                Filtrar por:
              </span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedTag === null
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todos
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredProjects.length > 0 ? (
              <>
                <p className="mb-8 text-slate-600">
                  Mostrando {filteredProjects.length} projeto
                  {filteredProjects.length !== 1 ? 's' : ''}
                  {selectedTag && ` com a tag "${selectedTag}"`}
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg text-slate-600">
                  Nenhum projeto encontrado com esta tag.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
