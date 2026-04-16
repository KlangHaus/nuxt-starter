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
    '@nuxtjs/i18n',
    '@nuxtjs/sanity',
    '@nuxtjs/robots',
    '@sentry/nuxt/module',
  ],

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
    lazy: true,
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
    },
  },

  // ── CSS ────────────────────────────────────────────────────────────────────
  css: [
    '@grundtone/vue/css/utilities',
    '~/assets/scss/global.scss',
  ],

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

  // ── Runtime config ─────────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
      posthogHost: process.env.NUXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      sentryDsn: process.env.NUXT_PUBLIC_SENTRY_DSN || '',
    },
  },
});
