import * as Sentry from '@sentry/nuxt';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const dsn = config.public.sentryDsn;

  if (!dsn) return;

  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1.0,
  });
});
