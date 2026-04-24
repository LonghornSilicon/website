# Longhorn Silicon — Website

Official marketing site for **Longhorn Silicon**, a student-led chip design lab at The University of Texas at Austin.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you use pnpm: `pnpm install` / `pnpm dev` (same scripts).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Dev server (Turbopack)   |
| `npm run build`   | Production build         |
| `npm run start`   | Run production server    |
| `npm run lint`    | ESLint                   |
| `npm run typecheck` | TypeScript (no emit)   |
| `npm run format`  | Prettier + Tailwind sort |

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository.
3. Set **Root Directory** to `website` if the repo is monorepo-style; otherwise leave default.
4. Framework preset **Next.js** is auto-detected; Node 20+ is used via `engines` in `package.json`.
5. (Optional) Add `NEXT_PUBLIC_SITE_URL` to match your production domain — see [.env.example](.env.example).
6. Deploy.

Environment variables are optional for this static marketing site.

## Project layout

- `src/app/` — routes, layout, global styles, OG image, favicon
- `src/components/` — layout, sections, primitives, visuals
- `src/data/` — nav, teams, stats, roadmap, sponsors (content)
- `src/lib/` — site constants and `cn()` helper
