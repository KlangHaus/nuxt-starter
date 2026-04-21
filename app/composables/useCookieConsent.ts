const CONSENT_KEY = 'cookie-consent';
type ConsentState = 'accepted' | 'rejected' | null;

export const useCookieConsent = () => {
  const consent = useState<ConsentState>(CONSENT_KEY, () => null);

  const load = () => {
    if (import.meta.server) return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      consent.value = stored;
    }
  };

  const accept = () => {
    consent.value = 'accepted';
    if (import.meta.client) localStorage.setItem(CONSENT_KEY, 'accepted');
  };

  const reject = () => {
    consent.value = 'rejected';
    if (import.meta.client) localStorage.setItem(CONSENT_KEY, 'rejected');
  };

  const reset = () => {
    consent.value = null;
    if (import.meta.client) localStorage.removeItem(CONSENT_KEY);
  };

  return {
    consent: readonly(consent),
    hasDecided: computed(() => consent.value !== null),
    accepted: computed(() => consent.value === 'accepted'),
    load,
    accept,
    reject,
    reset,
  };
};
