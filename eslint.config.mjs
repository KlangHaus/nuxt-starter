import withNuxt from './.nuxt/eslint.config.mjs';
import sonarjs from 'eslint-plugin-sonarjs';

export default withNuxt(
  {
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      'sonarjs/no-duplicate-string': 'off',
      // Vue 3 allows fragments (multiple template roots)
      'vue/no-multiple-template-root': 'off',
    },
  },
);
