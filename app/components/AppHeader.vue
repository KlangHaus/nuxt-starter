<script setup lang="ts">
  // The starter's own site header. grundtone 3.x ships no GTHeader: a site
  // header is the part of a project that differs most from one site to the
  // next, so it lives here, built on grundtone's tokens, for you to change.
  defineProps<{
    nav: { label: string; href: string }[];
  }>();

  const { t } = useI18n();
  const localePath = useLocalePath();
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner container">
      <NuxtLink class="app-header__logo" :to="localePath('/')">
        {{ t('site.name') }}
      </NuxtLink>

      <nav class="app-header__nav" :aria-label="t('nav.label')">
        <NuxtLink v-for="item in nav" :key="item.href" :to="localePath(item.href)">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .app-header {
    background: var(--color-background);
    border-block-end: 1px solid var(--color-border-light);
    padding-block: var(--space-md);
  }

  .app-header__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-md) var(--space-lg);
  }

  .app-header__logo {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text);
    text-decoration: none;
  }

  .app-header__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-md);
    margin-inline-end: auto;

    a {
      color: var(--color-text);
      text-decoration: none;

      &:hover,
      &.router-link-exact-active {
        color: var(--color-primary);
      }
    }
  }

  .app-header__actions {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
</style>
