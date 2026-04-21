import { createTheme } from '@grundtone/core';

// ── Theme ────────────────────────────────────────────────────────────────────
// Customise your brand colors, fonts, and radii here.
// See: https://grundtone.dev/guide/theme-configuration

const theme = createTheme({
  light: {
    colors: {
      primary: '#0059b3',
      primaryLight: '#3381cc',
      primaryDark: '#003d7a',
      onPrimary: '#ffffff',
    },
    typography: {
      fontFamily: {
        base: "'Inter', sans-serif",
        heading: "'Inter', sans-serif",
        mono: "'Fira Code', monospace",
      },
    },
  },
  dark: {
    colors: {
      primary: '#4dabf7',
      primaryLight: '#74c0fc',
      primaryDark: '#339af0',
      onPrimary: '#1a1a1a',
    },
  },
});

// ── Nuxt config ──────────────────────────────────────────────────────────────

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: [
    '@grundtone/nuxt',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sanity',
    '@nuxtjs/sitemap',
    '@sentry/nuxt/module',
  ],

  // ── Site (delt af sitemap + robots) ────────────────────────────────────────
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    name: 'Grundtone Nuxt Starter',
  },

  // ── Fonts ──────────────────────────────────────────────────────────────────
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Fira Code', provider: 'google' },
    ],
  },

  // ── Grundtone ──────────────────────────────────────────────────────────────
  grundtone: {
    theme,
  },

  // ── i18n ───────────────────────────────────────────────────────────────────
  i18n: {
    defaultLocale: 'da',
    locales: [
      { code: 'da', name: 'Dansk', file: 'da.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    langDir: '../i18n/locales',
    strategy: 'prefix_except_default',
  },

  // ── Sanity ─────────────────────────────────────────────────────────────────
  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2025-04-01',
    useCdn: true,
  },

  // ── Sentry ─────────────────────────────────────────────────────────────────
  sentry: {
    sourceMapsUploadOptions: {
      org: process.env.SENTRY_ORG || '',
      project: process.env.SENTRY_PROJECT || '',
      authToken: process.env.SENTRY_AUTH_TOKEN || '',
    },
  },

  // ── CSS ────────────────────────────────────────────────────────────────────
  css: ['@grundtone/vue/css/utilities', '~/assets/scss/global.scss'],

  // ── Vite ───────────────────────────────────────────────────────────────────
  vite: {
    optimizeDeps: {
      include: ['@grundtone/vue', '@grundtone/utils'],
    },
  },

  // ── Nitro ──────────────────────────────────────────────────────────────────
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  // ── Security headers + caching ─────────────────────────────────────────────
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      },
    },
    '/_nuxt/**': {
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
    },
  },

  // ── Sitemap ────────────────────────────────────────────────────────────────
  sitemap: {
    // Tilføj dynamiske sider (fx fra Sanity) via en endpoint:
    // sources: ['/api/__sitemap__/urls'],
    exclude: ['/404'],
  },

  // ── Runtime config ─────────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
      posthogHost: process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      sentryDsn: process.env.NUXT_PUBLIC_SENTRY_DSN || '',
    },
  },
});
