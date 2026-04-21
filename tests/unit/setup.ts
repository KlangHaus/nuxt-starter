import { vi } from 'vitest';

vi.stubGlobal('useThemeSwitch', () => ({
  isDark: { value: false },
  toggleMode: () => {},
}));
