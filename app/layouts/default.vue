<script setup lang="ts">
const { t } = useI18n();

const nav = computed(() => [
  { label: t('nav.home'), href: '/' },
  { label: t('nav.about'), href: '/about' },
]);
</script>

<template>
  <GTSkipLink />
  <GTHeader :logo="t('site.name')" logo-href="/" :nav="nav">
    <template #actions>
      <ThemeToggle />
    </template>
  </GTHeader>

  <main id="main">
    <slot />
  </main>

  <GTFooter :nav="nav">
    <template #copyright>
      &copy; {{ new Date().getFullYear() }} {{ t('site.name') }}
    </template>
  </GTFooter>
</template>
