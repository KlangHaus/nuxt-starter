<script setup lang="ts">
  const { t } = useI18n();

  const nav = computed(() => [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
  ]);
</script>

<template>
  <GTSkipLink />
  <AppHeader :nav="nav" />

  <main id="main">
    <slot />
  </main>

  <CookieConsent />

  <AppFooter :nav="nav" />
</template>
