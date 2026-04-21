# Grundtone Nuxt Starter

Nuxt 4 template med Grundtone-theming, Sanity CMS, i18n, Sentry, PostHog og deployment til Vercel.

## Stack

- **Framework:** Nuxt 4 + Vue 3
- **Theming:** `@grundtone/nuxt` (light/dark + tokens)
- **Runtime:** Bun + Node 24 LTS
- **CMS:** Sanity
- **i18n:** `@nuxtjs/i18n` (da / en)
- **SEO:** `@nuxtjs/sitemap` + `@nuxtjs/robots`
- **Billeder & fonts:** `@nuxt/image` + `@nuxt/fonts`
- **Observability:** Sentry + PostHog
- **A11y:** `@nuxt/a11y` (alpha)
- **Tests:** Vitest + `@nuxt/test-utils` (unit), Playwright (e2e)
- **Lint:** ESLint (flat config) + Stylelint + Prettier + Commitlint + Husky
- **Deploy:** Vercel (konfigureret via `vercel.ts`)

## Kom i gang

```bash
bun install
cp .env.example .env   # udfyld nøgler
bun run dev
```

Åbn http://localhost:3000

## Scripts

| Script              | Beskrivelse                         |
| ------------------- | ----------------------------------- |
| `bun run dev`       | Dev server                          |
| `bun run build`     | Production build                    |
| `bun run preview`   | Preview af build                    |
| `bun run generate`  | Statisk export                      |
| `bun run lint`      | ESLint + Stylelint + Prettier check |
| `bun run lint:fix`  | Auto-fix alle lintere               |
| `bun run typecheck` | Nuxt typecheck                      |
| `bun run test`      | Vitest unit tests                   |
| `bun run test:e2e`  | Playwright e2e                      |

## Projekt-struktur

```
app/
  app.vue
  assets/scss/         # global SCSS
  components/          # auto-importerede komponenter
  composables/
  layouts/
  pages/               # file-based routing
  plugins/             # client/server plugins (fx posthog)
i18n/locales/          # da.json, en.json
sanity/schema.ts       # Sanity schema-stub
server/api/            # Nitro API routes
tests/
  unit/                # Vitest
  e2e/                 # Playwright
sentry.client.config.ts
sentry.server.config.ts
nuxt.config.ts
vercel.ts              # Vercel config (typesafe)
```

## Environment-variabler

Se `.env.example`. Alle `NUXT_PUBLIC_*` eksponeres i klienten via `runtimeConfig.public`.

| Variabel                                              | Påkrævet | Formål                              |
| ----------------------------------------------------- | -------- | ----------------------------------- |
| `NUXT_PUBLIC_SITE_URL`                                | ✓        | Bruges af sitemap + robots          |
| `NUXT_PUBLIC_SANITY_PROJECT_ID`                       | ✓        | Sanity projekt-ID                   |
| `NUXT_PUBLIC_SANITY_DATASET`                          |          | Default: `production`               |
| `NUXT_PUBLIC_SENTRY_DSN`                              |          | Aktiverer Sentry hvis sat           |
| `SENTRY_ORG` / `SENTRY_PROJECT` / `SENTRY_AUTH_TOKEN` |          | Kun til source-map upload i build   |
| `NUXT_PUBLIC_POSTHOG_KEY`                             |          | Aktiverer PostHog hvis sat          |
| `NUXT_PUBLIC_POSTHOG_HOST`                            |          | Default: `https://eu.i.posthog.com` |

## Deployment

Projektet er forudkonfigureret til Vercel via `vercel.ts`:

```bash
vercel link
vercel env pull
vercel --prod
```

## Theming

Rediger tokens i `nuxt.config.ts` under `createTheme({ light, dark })`. Se [grundtone.dev/guide/theme-configuration](https://grundtone.dev/guide/theme-configuration).

## Licens

MIT — se [LICENSE](./LICENSE).
