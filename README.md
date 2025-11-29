<<<<<<< HEAD
# Portfólio Geann0

Um portfólio pessoal moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS.

![Portfolio Preview](./public/images/og-image.jpg)

## 🚀 Features

- ✨ Design moderno e limpo
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada com Next.js 14
- 🎨 Paleta de cores extraída da imagem de perfil
- 🔍 SEO otimizado com meta tags e structured data
- 📝 Sistema de gerenciamento de projetos via JSON
- 📬 Formulário de contato funcional com validação
- 🎯 Filtragem de projetos por tags
- ♿ Acessibilidade (WCAG 2.1 AA)
- 🌐 Pronto para internacionalização

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Validation:** React Hook Form + Zod
- **Icons:** Lucide React
- **Animations:** Framer Motion (opcional)
- **Deployment:** Vercel

## 📁 Estrutura do Projeto

```
PORTIFOLIO GEANN/
├── data/
│   ├── site.config.json    # Configurações do site
│   └── projects.json        # Dados dos projetos
├── public/
│   ├── images/
│   │   ├── profile.jpg      # Sua foto de perfil
│   │   ├── projects/        # Imagens dos projetos
│   │   └── og-image.jpg     # Open Graph image
│   └── documents/
│       └── resume.pdf       # Seu currículo
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ContactForm.tsx
│   ├── pages/
│   │   ├── index.tsx        # Página principal
│   │   ├── about.tsx        # Página sobre
│   │   ├── projects/
│   │   │   ├── index.tsx    # Lista de projetos
│   │   │   └── [slug].tsx   # Página individual do projeto
│   │   ├── api/
│   │   │   └── contact.ts   # API route para contato
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   └── styles/
│       └── globals.css
└── README.md
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. **Clone ou baixe este repositório**

```powershell
cd "C:\Users\haduk\OneDrive\Desktop\PORTIFOLIO GEANN"
```

2. **Instale as dependências**

```powershell
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure suas informações**

Edite os arquivos de configuração com seus dados:

- `data/site.config.json` - Informações pessoais, redes sociais, skills
- `data/projects.json` - Seus projetos

4. **Adicione suas imagens**

- Coloque sua foto de perfil em `public/images/profile.jpg`
- Adicione imagens dos projetos em `public/images/projects/`
- Adicione uma imagem Open Graph em `public/images/og-image.jpg`

5. **Execute o servidor de desenvolvimento**

```powershell
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Personalização

### 1. Informações Pessoais

Edite `data/site.config.json`:

```json
{
  "author": {
    "display_name": "Seu Nome",
    "title": "Seu Cargo",
    "short_bio": "Sua bio curta...",
    "profile_image_url": "/images/profile.jpg"
  },
  "contact": {
    "email": "seu@email.com"
  },
  "social": {
    "github": "https://github.com/seu-usuario",
    "linkedin": "https://linkedin.com/in/seu-perfil"
  }
}
```

### 2. Adicionar Projetos

Edite `data/projects.json`:

```json
{
  "id": "projeto-unico-id",
  "slug": "nome-do-projeto",
  "title": "Nome do Projeto",
  "short_description": "Descrição curta (max 140 chars)",
  "long_description": "Descrição detalhada...",
  "cover_image": "/images/projects/projeto.jpg",
  "tags": ["React", "TypeScript"],
  "tech_stack": {
    "frontend": ["Next.js", "Tailwind"],
    "backend": ["Node.js"]
  },
  "repo_url": "https://github.com/...",
  "demo_url": "https://...",
  "year": "2024",
  "featured": true
}
```

### 3. Cores e Estilo

Edite `tailwind.config.ts` para mudar a paleta de cores:

```typescript
colors: {
  primary: {
    500: '#0ea5a4',  // Sua cor primária
    // ...
  }
}
```

### 4. Formulário de Contato

Para implementar envio de email, edite `src/pages/api/contact.ts`:

**Opção 1: SendGrid**

```typescript
npm install @sendgrid/mail

// Em contact.ts:
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: 'seu@email.com',
  from: 'noreply@seusite.com',
  subject: `Nova mensagem de ${data.name}`,
  // ...
})
```

**Opção 2: Resend (recomendado)**

```typescript
npm install resend

import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Portfolio <onboarding@resend.dev>',
  to: 'seu@email.com',
  // ...
})
```

**Opção 3: Formspree (sem backend)**

Altere o `ContactForm.tsx` para enviar para Formspree:

```typescript
const response = await fetch('https://formspree.io/f/seu-form-id', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})
```

## 🌐 Deploy

### Vercel (Recomendado)

1. **Push para GitHub**

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main
```

2. **Deploy no Vercel**

- Acesse [vercel.com](https://vercel.com)
- Clique em "Import Project"
- Selecione seu repositório
- Configure variáveis de ambiente (se necessário):
  - `SENDGRID_API_KEY` ou `RESEND_API_KEY`
- Clique em "Deploy"

### Netlify

```powershell
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 🎨 Customização Avançada

### Adicionar Google Analytics

Em `src/pages/_document.tsx`:

```typescript
<Head>
  <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  />
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `,
    }}
  />
</Head>
```

### Adicionar Modo Escuro

Instale next-themes:

```powershell
npm install next-themes
```

Configure em `_app.tsx` e ajuste o Tailwind config.

## 📊 Performance

Este template é otimizado para performance:

- ✅ Lighthouse Score: 95+
- ✅ Images otimizadas com next/image
- ✅ Lazy loading de componentes
- ✅ CSS minificado e tree-shaking
- ✅ Static Generation (SSG) onde possível

## 🐛 Troubleshooting

### Erro de compilação com TypeScript

```powershell
# Limpe o cache do Next.js
rm -rf .next
npm run dev
```

### Imagens não carregam

- Verifique se as imagens estão em `public/`
- Adicione domínios externos em `next.config.js`:

```javascript
images: {
  domains: ['exemplo.com'],
}
```

## 📄 Licença

MIT License - sinta-se livre para usar este template para seus projetos pessoais ou comerciais.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📬 Contato

- GitHub: [@Geann0](https://github.com/Geann0)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: seu@email.com

---

Desenvolvido com ❤️ por Geann0
=======
# Portfólio Ketlyn Trindade

Site one-page pensado para validar a carreira atual de Ketlyn como Social Media Manager e conectar com o sonho de Direito/Polícia. O tom é autoritário, elegante e fiel ao universo de motos, fé e justiça.

## Estrutura do conteúdo

- **Hero:** Manchete “Transformando Criatividade em Resultado.”, subtítulo Social Media Manager | Edição de Vídeo | Estratégia Digital e CTAs para projetos e contato.
- **Sobre:** Texto narrativo que une disciplina jurídica, paixão por velocidade e atuação remota em Ji-Paraná.
- **Portfólio:** Case Frigorífico Magnata (PVH) com mockups, CapCut e identidade visual.
- **Paixões:** Seção “Fora do Escritório” com moto 🏍️, fé ✝️ e futura carreira jurídica ⚖️.
- **Galeria:** cards reservados para fotos reais da Ketlyn (momento moto, edição e bastidores) que podem ser colocadas em `public/gallery/`.

## Tecnologias

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 via `@tailwindcss/postcss`
- `next/font` (Montserrat + Merriweather)
- Preparado para integrar Prisma/PostgreSQL, Supabase Storage e Resend

## Rodando localmente

```bash
npm install
npm run dev
```

Visite [http://localhost:3000](http://localhost:3000) para ver o site.

## Identidade visual

- **Paleta Dark Premium**
  - **Asfalto Noturno** (#111111 / #1a1a1a): base que traduz autoridade policial, tática e velocidade (referência às motos e ao uniforme da polícia).
  - **Roxo Elétrico** (#7c3aed / #8b5cf6): destaque criativo e feminino forte, conectado ao universo gamer e à ideia de realeza magnata.
  - **Ouro Metálico** (#d4af37): detalhes premium em botões e bordas, representando sucesso, Justiça e fé.
  - **Branco Gelo** (#f3f4f6): cor do texto para garantir clareza, transparência e luz.
- **Tipografia:** Montserrat (títulos) e Merriweather (corpo).
- **Estilo:** Minimalista, tipografia forte e botões arredondados com contrastes em dourado e roxo elétrico.

## Próximos passos sugeridos

1. Criar componentes reutilizáveis sob `components/sections` e `components/ui`.
2. Implementar formulário de contato via Server Action + Resend e rotas Prisma/Postgres para projetos.
3. Adicionar testes com Jest + React Testing Library (componentes críticos) e Playwright (fluxos principais).
4. Preparar deploy (Vercel) e monitorar com Vercel Analytics + auditoria de segurança.

## Galeria e fotos reais

- Crie a pasta `public/gallery/` e adicione as fotos da Ketlyn (por exemplo `portrait-1.jpg`, `workstation-1.jpg`, `bike-1.jpg`).
- Cada card da galeria usa o nome do título para orientar qual textura aparecerá — mantenha nomes intuitivos para facilitar o swap quando o arquivo final chegar.
- O layout foi construído com a mesma lógica de portfólios digitais de Social Media Managers que combinam hero + case study + galeria + opções de contato instantâneas para mostrar autoridade e criatividade.

## Opções de contato

- O botão “Vamos Conversar?” abre dois caminhos: Instagram e WhatsApp. Atualize os links/telefones com os canais reais da Ketlyn para automatizar o acionamento.
>>>>>>> 98095f53ba63eff748656f43fcc213d470afe403
