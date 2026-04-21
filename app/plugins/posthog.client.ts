import posthog from 'posthog-js';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const key = config.public.posthogKey;
  const host = config.public.posthogHost;

  if (!key) return;

  const { accepted, consent, load } = useCookieConsent();
  load();

  let initialized = false;
  const initIfAccepted = () => {
    if (initialized || !accepted.value) return;
    initialized = true;

    posthog.init(key, {
      api_host: host || 'https://eu.i.posthog.com',
      capture_pageview: false, // Nuxt router handles this
      persistence: 'localStorage',
    });

    const router = useRouter();
    router.afterEach((to) => {
      posthog.capture('$pageview', { $current_url: to.fullPath });
    });
  };

  initIfAccepted();
  watch(consent, initIfAccepted);

  return { provide: { posthog } };
});
