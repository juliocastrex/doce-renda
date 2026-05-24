# Doce Renda

App PWA pra senhoras 50+ aprenderem a vender doces sem usar o fogão.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Estrutura

- `app/` — rotas Next.js (App Router)
  - `/` boas-vindas → `/home` 4 cards principais
  - `/aprender` lista de coleções → `/aprender/[slug]` PDF + vídeos
  - `/calcular` calculadora de lucro
  - `/vender` scripts de WhatsApp por categoria (com botão copiar)
  - `/bonus` materiais extras pra download
- `lib/content/` — dados (coleções, scripts, bônus) hardcoded em TS
- `public/ebooks/` — PDFs (adicione aqui — referenciados em `lib/content/colecoes.ts`)
- `public/bonus/` — arquivos baixáveis dos bônus
- `public/icons/` — `icon-192.png` e `icon-512.png` (gere e coloque aqui pra PWA)

## Stack

Next.js 14, TypeScript, Tailwind CSS, lucide-react. Conteúdo estático,
sem CMS nem banco. Deploy: Vercel.
