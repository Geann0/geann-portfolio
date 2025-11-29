import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import siteConfig from '@/../../data/site.config.json'
import projectsData from '@/../../data/projects.json'

export default function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured)

  return (
    <>
      <Head>
        <title>{siteConfig.site_title}</title>
        <meta name="description" content={siteConfig.site_description} />
        <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
        <meta property="og:title" content={siteConfig.site_title} />
        <meta property="og:description" content={siteConfig.site_description} />
        <meta property="og:image" content={siteConfig.seo.og_image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.seo.twitter_handle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                Sobre mim
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {siteConfig.author.short_bio}
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Trabalho com tecnologias modernas para criar soluções web
                escaláveis, seguras e com excelente experiência do usuário.
                Cada projeto é uma oportunidade de aprender e entregar valor
                real.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
              Skills & Tecnologias
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {siteConfig.skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-slate-600"
                      >
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary-600"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                Projetos em Destaque
              </h2>
              <Link
                href="/projects"
                className="text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}