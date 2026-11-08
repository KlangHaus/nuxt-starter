import withNuxt from './.nuxt/eslint.config.mjs';
import sonarjs from 'eslint-plugin-sonarjs';

export default withNuxt({
  plugins: { sonarjs },
  rules: {
    ...sonarjs.configs.recommended.rules,
    'sonarjs/no-duplicate-string': 'off',
    // Vue 3 allows fragments (multiple template roots)
    'vue/no-multiple-template-root': 'off',
    // Agree with Prettier, which writes void elements as `<hr />`. The rule's
    // default (`void: 'never'`) made lint-staged's `eslint --fix` rewrite them
    // to `<hr >` on commit, and `prettier --check` in CI then failed.
    'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
  },
});
