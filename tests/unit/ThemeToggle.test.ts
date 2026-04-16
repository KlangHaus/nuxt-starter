import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ThemeToggle from '../../app/components/ThemeToggle.vue';

describe('ThemeToggle', () => {
  it('renders a button', () => {
    const wrapper = mount(ThemeToggle, {
      global: {
        stubs: { GTButton: true },
        mocks: {
          useThemeSwitch: () => ({
            isDark: { value: false },
            toggleMode: () => {},
          }),
        },
      },
    });
    expect(wrapper.find('button, gt-button-stub').exists()).toBe(true);
  });
});
