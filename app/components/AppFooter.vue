<script setup lang="ts">
  // The starter's own site footer; see AppHeader.vue for why it lives here.
  defineProps<{
    nav: { label: string; href: string }[];
  }>();

  const { t } = useI18n();
  const localePath = useLocalePath();
  const year = new Date().getFullYear();
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner container">
      <nav class="app-footer__nav" :aria-label="t('nav.footerLabel')">
        <NuxtLink v-for="item in nav" :key="item.href" :to="localePath(item.href)">
          {{ item.label }}
        </NuxtLink>
      </nav>
      <p class="app-footer__copyright">&copy; {{ year }} {{ t('site.name') }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .app-footer {
    background: var(--color-background-alt);
    border-block-start: 1px solid var(--color-border-light);
    padding-block: var(--space-xl);
    color: var(--color-text-secondary);
    font-size: var(--font-size-sm);
  }

  .app-footer__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-md);
  }

  .app-footer__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);

    a {
      color: inherit;

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .app-footer__copyright {
    margin: 0;
  }
</style>
