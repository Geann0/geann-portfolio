import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ExternalLink, Star, GitFork } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import siteConfig from '@/../../data/site.config.json'
import projectsData from '@/../../data/projects.json'

type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  language: string | null
  created_at: string
  updated_at: string
  pushed_at: string
}

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [showGithubRepos, setShowGithubRepos] = useState(false)

  useEffect(() => {
    fetch('/api/github-repos')
      .then((res) => res.json())
      .then((data) => {
        if (data.repos) {
          setGithubRepos(data.repos)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching GitHub repos:', error)
        setLoading(false)
      })
  }, [])

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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
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
              
              <button
                onClick={() => setShowGithubRepos(!showGithubRepos)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  showGithubRepos
                    ? 'bg-slate-900 text-white'
                    : 'border-2 border-slate-300 bg-white text-slate-700 hover:border-slate-900'
                }`}
              >
                {showGithubRepos ? 'Ver Projetos Destacados' : 'Ver Repositórios GitHub'}
              </button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {!showGithubRepos ? (
              // Featured Projects
              filteredProjects.length > 0 ? (
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
                    Nenhum projeto encontrado com a tag selecionada.
                  </p>
                </div>
              )
            ) : (
              // GitHub Repositories
              <div>
                <h2 className="mb-8 text-2xl font-bold text-slate-900">
                  Repositórios Públicos do GitHub
                </h2>
                {loading ? (
                  <div className="py-20 text-center">
                    <p className="text-lg text-slate-600">Carregando repositórios...</p>
                  </div>
                ) : githubRepos.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {githubRepos.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-600 hover:shadow-lg"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600">
                            {repo.name}
                          </h3>
                          <ExternalLink className="text-slate-400 group-hover:text-primary-600" size={18} />
                        </div>
                        
                        <p className="mb-4 line-clamp-2 text-sm text-slate-600">
                          {repo.description || 'Sem descrição'}
                        </p>
                        
                        <div className="mb-4 flex flex-wrap gap-2">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span className="h-3 w-3 rounded-full bg-primary-600"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star size={14} />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={14} />
                            {repo.forks_count}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-lg text-slate-600">
                      Nenhum repositório público encontrado.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
