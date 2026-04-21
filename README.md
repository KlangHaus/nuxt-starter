# Grundtone Nuxt Starter

Nuxt 4 template med Grundtone-theming, Sanity CMS, i18n, consent-gated analytics, og deployment til Vercel.

## Stack

- **Framework:** Nuxt 4 + Vue 3
- **Theming:** `@grundtone/nuxt` (light/dark + tokens) med theme toggle
- **Runtime:** Bun + Node 24 LTS
- **CMS:** Sanity
- **i18n:** `@nuxtjs/i18n` (da / en) med language switcher
- **SEO:** `@nuxtjs/sitemap` + `@nuxtjs/robots` + default OG meta
- **Sikkerhed:** Nitro `routeRules` med security headers (HSTS, XFO, XCTO, osv.)
- **Billeder & fonts:** `@nuxt/image` + `@nuxt/fonts`
- **Analytics:** PostHog (samtykke-gated via cookie banner) + Sentry
- **A11y:** `@nuxt/a11y` (alpha) + skip-link + custom error.vue
- **Tests:** Vitest + `@nuxt/test-utils` (unit), Playwright (e2e)
- **Lint:** ESLint (flat config) + Stylelint + Prettier + Commitlint (med scope-enum) + Husky
- **CI/CD:** GitHub Actions (lint/test/build + e2e) + release-please + Dependabot
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
| `bun run analyze`   | Bundle analyse                      |
| `bun run lint`      | ESLint + Stylelint + Prettier check |
| `bun run lint:fix`  | Auto-fix alle lintere               |
| `bun run typecheck` | Nuxt typecheck                      |
| `bun run test`      | Vitest unit tests                   |
| `bun run test:e2e`  | Playwright e2e                      |

## Projekt-struktur

```
app/
  app.vue                # global SEO defaults (titleTemplate, OG)
  error.vue              # 404 / generic error page
  assets/scss/           # global SCSS
  components/            # auto-importerede komponenter (Theme/LanguageSwitcher, CookieConsent)
  composables/           # fx useCookieConsent, useThemeSwitch
  layouts/               # default.vue (header/footer/cookie banner)
  middleware/            # route middleware
  pages/                 # file-based routing
  plugins/               # fx posthog.client (samtykke-gated)
app.config.ts            # statisk public config (ikke env-drevet)
i18n/locales/            # da.json, en.json
public/                  # statiske assets (og-default.png, favicon, osv.)
sanity/schema.ts         # Sanity schema-stub
server/api/              # Nitro API routes
tests/
  unit/                  # Vitest
  e2e/                   # Playwright
sentry.client.config.ts  # Sentry client init
sentry.server.config.ts  # Sentry server init
nuxt.config.ts           # Nuxt + modul-config + routeRules/security headers
vercel.ts                # Vercel config (typesafe)
.github/
  workflows/             # ci.yml, e2e.yml, release-please.yml
  dependabot.yml
  CODEOWNERS
```

## Environment-variabler

Se `.env.example`. Alle `NUXT_PUBLIC_*` eksponeres i klienten via `runtimeConfig.public`.

| Variabel                                              | Påkrævet | Formål                                   |
| ----------------------------------------------------- | -------- | ---------------------------------------- |
| `NUXT_PUBLIC_SITE_URL`                                | ✓        | Bruges af sitemap + robots               |
| `NUXT_PUBLIC_SANITY_PROJECT_ID`                       | ✓        | Sanity projekt-ID                        |
| `NUXT_PUBLIC_SANITY_DATASET`                          |          | Default: `production`                    |
| `NUXT_PUBLIC_SENTRY_DSN`                              |          | Aktiverer Sentry hvis sat                |
| `SENTRY_ORG` / `SENTRY_PROJECT` / `SENTRY_AUTH_TOKEN` |          | Kun til source-map upload i build        |
| `NUXT_PUBLIC_POSTHOG_KEY`                             |          | Aktiverer PostHog (kræver user-samtykke) |
| `NUXT_PUBLIC_POSTHOG_HOST`                            |          | Default: `https://eu.i.posthog.com`      |

## Cookie-samtykke

PostHog initialiseres **kun** efter brugeren har accepteret i cookie-banneret. Samtykket gemmes i `localStorage` (`cookie-consent`). Se `app/composables/useCookieConsent.ts` og `app/plugins/posthog.client.ts`.

## Deployment

Projektet er forudkonfigureret til Vercel via `vercel.ts`:

```bash
vercel link
vercel env pull
vercel --prod
```

## Releases

Release-please lytter på `main` for conventional commits (`feat:`, `fix:`, `feat!:`) og åbner automatisk en Release PR der bumper version + opdaterer `CHANGELOG.md`. Når PR'en merges, oprettes git-tag + GitHub Release.

Tilladte commit-scopes er defineret i `.commitlintrc.json`.

## Theming

Rediger tokens i `nuxt.config.ts` under `createTheme({ light, dark })`. Se [grundtone.dev/guide/theme-configuration](https://grundtone.dev/guide/theme-configuration).

## Assets

- Erstat `public/og-default.png` med dit eget 1200×630 billede
- Tilføj favicon + app-icons i `public/` efter behov

## Licens

MIT — se [LICENSE](./LICENSE).
