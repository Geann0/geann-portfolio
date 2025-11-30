import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import siteConfig from '@/../../data/site.config.json'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre | {siteConfig.site_title}</title>
        <meta
          name="description"
          content={`Conheça mais sobre ${siteConfig.author.display_name} - ${siteConfig.author.title}`}
        />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Sobre mim
              </h1>
              <p className="text-xl text-slate-700">
                Sou {siteConfig.author.title} apaixonado por criar experiências web
                excepcionais
              </p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <div>
                <div className="relative mb-8 h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={siteConfig.author.profile_image_url}
                    alt={siteConfig.author.display_name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="mb-6 text-3xl font-bold text-slate-900">
                  Minha Jornada
                </h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    {siteConfig.author.short_bio}
                  </p>
                  <p>
                    Com anos de experiência em desenvolvimento full-stack,
                    trabalhei em projetos que vão desde startups até empresas
                    consolidadas, sempre focando em entregar soluções de alta
                    qualidade que fazem a diferença.
                  </p>
                  <p>
                    Minha abordagem combina boas práticas de engenharia de
                    software com atenção aos detalhes de design e experiência do
                    usuário. Acredito que código limpo e bem documentado é tão
                    importante quanto a funcionalidade final.
                  </p>
                  <p>
                    Quando não estou codificando, gosto de aprender novas
                    tecnologias, contribuir para projetos open-source e
                    compartilhar conhecimento com a comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                Meu Processo
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl font-bold text-primary-600">
                    1
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    Descoberta
                  </h3>
                  <p className="text-slate-600">
                    Entendo as necessidades do projeto, objetivos de negócio e
                    requisitos técnicos. Defino escopo, prazos e arquitetura.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl font-bold text-primary-600">
                    2
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    Desenvolvimento
                  </h3>
                  <p className="text-slate-600">
                    Implemento a solução com código limpo, testes automatizados
                    e boas práticas. Mantenho comunicação constante durante o
                    processo.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-2xl font-bold text-primary-600">
                    3
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    Entrega
                  </h3>
                  <p className="text-slate-600">
                    Deploy otimizado, documentação completa e suporte
                    pós-lançamento. Monitoro performance e faço ajustes
                    necessários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                Stack & Ferramentas
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {siteConfig.skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="mb-4 text-xl font-semibold text-slate-900">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
