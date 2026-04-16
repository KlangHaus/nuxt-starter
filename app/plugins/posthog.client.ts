import posthog from 'posthog-js';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const key = config.public.posthogKey;
  const host = config.public.posthogHost;

  if (!key) return;

  posthog.init(key, {
    api_host: host || 'https://eu.i.posthog.com',
    capture_pageview: false, // Nuxt router handles this
    persistence: 'localStorage',
  });

  // Track page views on route change
  const router = useRouter();
  router.afterEach((to) => {
    posthog.capture('$pageview', { $current_url: to.fullPath });
  });

  return { provide: { posthog } };
});
