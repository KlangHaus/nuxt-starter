import { applyThemeToDOM, createTheme } from '@grundtone/vue';

export function useThemeSwitch() {
  const isDark = useState('theme-dark', () => false);

  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();

  // Read grundtone theme from module options (injected at build time)
  const grundtone = nuxtApp.$config?.public?.grundtone as
    | { theme?: { light?: Record<string, unknown>; dark?: Record<string, unknown> } }
    | undefined;

  function applyTheme() {
    if (!import.meta.client) return;

    const mode = isDark.value ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);

    // Re-apply grundtone tokens for current mode
    const tokens = isDark.value ? grundtone?.theme?.dark : grundtone?.theme?.light;
    if (tokens) {
      applyThemeToDOM(tokens as Record<string, unknown>);
    }
  }

  function toggleMode() {
    isDark.value = !isDark.value;
    applyTheme();

    // Persist preference
    if (import.meta.client) {
      localStorage.setItem('theme-preference', isDark.value ? 'dark' : 'light');
    }
  }

  // Restore preference on mount
  onMounted(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'dark') {
      isDark.value = true;
    } else if (!saved) {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
  });

  return { isDark: readonly(isDark), toggleMode };
}
