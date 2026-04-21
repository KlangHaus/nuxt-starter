import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ThemeToggle from '../../app/components/ThemeToggle.vue';

describe('ThemeToggle', () => {
  it('mounts without errors', () => {
    const wrapper = mount(ThemeToggle, {
      global: { stubs: { GTButton: true } },
    });
    expect(wrapper.html()).toContain('stub');
  });
});
