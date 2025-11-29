const heroHighlights = [
  {
    label: "Localidade",
    value: "Ji-Paraná (Jipa) · atendimento remoto",
  },
  {
    label: "Especialidade",
    value: "Social Media + CapCut + Anúncios criativos",
  },
  {
    label: "Cliente em foco",
    value: "Frigorífico Magnata (PVH)",
  },
];

const passions = [
  {
    icon: "🏍️",
    title: "Adrenalina e Liberdade",
    description: "Rumo à Z900 e à próxima curva de inovação.",
  },
  {
    icon: "✝️",
    title: "Princípios e Fé",
    description: "Base sólida para decisões firmes e éticas.",
  },
  {
    icon: "⚖️",
    title: "Futura Doutora / Delegada",
    description: "Disciplina do Direito, foco na sociedade e na justiça.",
  },
];

const project = {
  name: "Frigorífico Magnata",
  location: "Porto Velho · PVH",
  description:
    "Gestão de identidade visual e conteúdo viral para o setor alimentício, conectando tradição e modernidade.",
  highlights: [
    "Vídeos criativos no CapCut com narrativa local",
    "Anúncios com linguagem autoral e autoritária",
    "Engajamento segmentado para o consumidor de carne premium",
  ],
};

const contactOptions = [
  {
    label: "Instagram",
    handle: "@ketlyntrindade",
    note: "Reels, bastidores e stories",
    href: "https://www.instagram.com/ketlyn.nnx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-[#7c3aed]"
        aria-hidden
      >
        <rect x={3} y={3} width={18} height={18} rx={6} />
        <circle cx={12} cy={12} r={4.5} />
        <circle cx={17.5} cy={6.5} r={1.5} />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Ketlyn Trindade",
    note: "+55 (69) 9 9999-9999",
    href: "https://wa.me/5569999999999",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-[#d4af37]"
        aria-hidden
      >
        <path d="M12.04 2C6.48 2 2 6.48 2 12c0 1.86.53 3.66 1.51 5.23L2 22l4.91-1.26A9.93 9.93 0 0 0 12.04 22c5.56 0 10.04-4.48 10.04-10s-4.48-10-10.04-10zm4.15 11.1c-.25.7-1.41 1.87-1.71 2-.3.12-.55.18-.78.03-.23-.14-.97-.35-1.9-.95-2.11-.9-3.48-3.17-3.57-3.29-.09-.12-.8-1.14-.8-2.18 0-1.04.55-1.55.76-1.76.21-.2.43-.26.67-.26.24 0 .5.01.71.01.24 0 .56-.09.88.66.32.75 1.04 2.46 1.13 2.64.09.18.15.39.03.64-.12.25-.18.42-.37.63-.2.2-.43.45-.61.79-.18.34-.03.65.14.86.17.21.32.34.57.54.25.2.7.43 1.35.68.65.25 1.17.31 1.65.24.49-.07 1.03-.42 1.34-.83.32-.4.31-.84.21-.95-.1-.12-1.9-1.36-1.92-1.38-.02-.01-.03-.03-.03-.05.01-.02.33-1.08.33-1.22 0-.14-.04-.18-.2-.32-.16-.14-.89-.66-.98-.74-.1-.08-.16-.18-.12-.33.04-.15.05-.26.2-.37.15-.12.46-.32.69-.48.23-.16.3-.24.43-.2.13.04.55.07.89.45.34.37.63.65.85.89.22.24.29.44.25.63-.04.19-.15.27-.25.35-.1.08-.5.19-.8.37-.3.18-.5.32-.48.45.02.13.18.52.69.96.51.44 1.01.65 1.44.74.43.1.81.07 1.02-.34.2-.41.2-.96.1-1.15-.1-.2-.4-.37-.54-.52-.14-.15-.34-.32-.34-.32z" />
      </svg>
    ),
  },
];

const gallery = [
  {
    title: "Rosto autoritário",
    caption: "Adicione uma foto real em /public/gallery/portrait-1.jpg",
  },
  {
    title: "Campo de provas",
    caption: "Mostre Ketlyn em ação editando ou com a moto",
  },
  {
    title: "Folha de roteiro",
    caption: "Registro criativo do case Frigorífico Magnata",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#111111] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.25),_transparent_35%),_radial-gradient(circle_at_20%_80%,_rgba(124,58,237,0.25),_transparent_30%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Ketlyn Trindade
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Transformando Criatividade em Resultado.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-300">
              Social Media Manager | Edição de Vídeo | Estratégia Digital. Aos
              18 anos, combino disciplina jurídica, paixão por motos e o olhar
              criativo do marketing para atender clientes como o Frigorífico
              Magnata, elevando marcas com coragem e autoridade.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="rounded-full border border-[#7c3aed] bg-[#7c3aed]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7c3aed] transition hover:bg-[#7c3aed] hover:text-black"
              >
                Ver Meus Projetos
              </a>
              <details className="group relative inline-flex rounded-full border border-[#d4af37] bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37] transition hover:bg-[#d4af37]/20">
                <summary className="list-none cursor-pointer">
                  Vamos Conversar?
                </summary>
                <div className="absolute left-1/2 top-full z-20 ml-[-1px] mt-3 w-[240px] -translate-x-1/2 space-y-3 rounded-3xl border border-white/20 bg-black/95 p-4 text-xs text-zinc-200 shadow-[0_25px_60px_rgba(0,0,0,0.75)]">
                  {contactOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 px-3 py-2 text-left text-sm text-white transition hover:border-[#7c3aed] hover:text-[#7c3aed]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-black/40">
                        {option.icon}
                      </span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
                          {option.label}
                        </p>
                        <p className="text-xs text-white/80">{option.handle}</p>
                        <p className="text-[0.65rem] text-zinc-500">
                          {option.note}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </details>
            </div>
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.7rem] uppercase tracking-[0.4em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="text-base text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 rounded-2xl border border-white/5 bg-white/10 p-4 text-xs text-zinc-200">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/60">
                Paleta &ldquo;Dark Premium&rdquo;
              </p>
              <p>
                Asfalto Noturno (#111111) trás autoridade e mistério; Roxo
                Elétrico (#7c3aed) impulsiona criatividade e realeza; Ouro
                Metálico (#d4af37) celebra sucesso/justiça; Branco Gelo
                (#f3f4f6) garante clareza e fé.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#1a1a1a]/80 via-[#0d0d0d] to-[#050505] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                Mockup · Frigorífico Magnata
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  "Identidade visual",
                  "Roteiros CapCut",
                  "Engajamento local",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/5 bg-black/60 p-4 text-sm text-zinc-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-32 rounded-2xl border border-white/5 bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
                  >
                    <div className="m-4 h-6 w-20 rounded-full bg-white/30" />
                    <div className="ml-4 mt-6 h-4 w-28 rounded-full bg-white/10" />
                    <div className="mt-4 h-10 rounded-2xl bg-white/5" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              Cada &ldquo;mockup&rdquo; reflete o olhar autoritário de Ketlyn,
              com cortes precisos, ritmo e storytelling do CapCut que geram
              resultados visíveis para o negócio.
            </p>
          </div>
        </section>

        <section className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1a1a1a]/90 to-[#111111]/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#d4af37]">
                Sobre Mim
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white">
                &ldquo;Olá, sou Ketlyn. Aos 18 anos, combino a disciplina de
                quem busca a carreira jurídica com a criatividade do marketing
                digital. Moro em Ji-Paraná, mas minha atuação não tem
                fronteiras. Apaixonada por desafios, velocidade e
                excelência.&rdquo;
              </h2>
            </div>
            <div className="rounded-3xl border border-[#d4af37] bg-black/60 px-6 py-4 text-right text-sm text-white/70">
              Ji-Paraná · Social Media Manager remoto · Sonhos em Direito
            </div>
          </div>
          <div className="mt-8 grid gap-6 text-sm text-zinc-300 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Habilidades
              </p>
              <p className="mt-3 text-base text-white">
                CapCut, storytelling visual, anúncios criativos e gestão de
                redes sociais.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Valores
              </p>
              <p className="mt-3 text-base text-white">
                Disciplina, fé e vontade de representar outras mulheres entre a
                criatividade e a justiça.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Impacto
              </p>
              <p className="mt-3 text-base text-white">
                Projetos que misturam autoridade, luxo e relevância local, como
                o case para o Frigorífico Magnata.
              </p>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#1a1a1a]/90 to-[#111111]/70 p-8">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Case Frigorífico Magnata — PVH
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              Gestão de identidade visual e conteúdo viral para o setor
              alimentício, sem perder o refinamento necessário a um cliente que
              representa força e tradição.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-zinc-200">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#d4af37]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-white/5 bg-black/70 p-6 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Detalhes
              </p>
              <p className="mt-2 text-base text-white">{project.location}</p>
              <p className="text-sm text-zinc-400">
                Client: Ketlyn executa campanhas com foco em resultados
                mensuráveis.
              </p>
            </div>
          </div>
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Mockup
            </p>
            <div className="mt-5 grid gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/50 px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Vídeo {index + 1}
                    </p>
                    <p className="text-xs text-zinc-500">CapCut · 30s</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#d4af37]" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-400">
              Conteúdo criado para viralizar nas redes locais, mantendo tom
              forte e elegante pedido pelo Frigorífico Magnata.
            </p>
          </div>
        </section>

        <section className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#1a1a1a]/70 to-[#111111]/80 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#7c3aed]">
                Galeria de Ketlyn
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Fotos e cenas que validam o storytelling
              </h2>
            </div>
            <p className="text-sm text-zinc-400">
              Adicione fotos reais em `public/gallery/` e elas entram
              automaticamente nos cards.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.title}
                className="space-y-3 rounded-3xl border border-white/5 bg-black/60 p-6"
              >
                <div className="h-36 rounded-2xl bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0b0b0b] p-4 text-xs text-white/60">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                    {item.title}
                  </p>
                  <p className="mt-8 text-[0.65rem] text-zinc-400">
                    {item.caption}
                  </p>
                </div>
                <p className="text-sm text-zinc-300">
                  Cole a imagem com o mesmo nome em `public/gallery/` para
                  mostrar o registro ao vivo.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[40px] border border-white/10 bg-gradient-to-r from-[#0b0b0b]/80 to-[#1a1a1a]/80 p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">
                Fora do Escritório
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Minhas Paixões
              </h2>
            </div>
            <a
              href="mailto:ola@ketlyntrindade.com"
              className="rounded-full border border-[#d4af37] px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Contato Estratégico
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {passions.map((item) => (
              <article
                key={item.title}
                className="space-y-3 rounded-3xl border border-white/5 bg-black/60 p-6"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
