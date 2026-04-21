<script setup lang="ts">
  const { t } = useI18n();

  const nav = computed(() => [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
  ]);
</script>

<template>
  <GTSkipLink />
  <GTHeader :logo="t('site.name')" logo-href="/">
    <template #nav>
      <a v-for="item in nav" :key="item.href" :href="item.href">
        {{ item.label }}
      </a>
      <LanguageSwitcher />
      <ThemeToggle />
    </template>
  </GTHeader>

  <main id="main">
    <slot />
  </main>

  <GTFooter :nav="nav">
    <template #copyright> &copy; {{ new Date().getFullYear() }} {{ t('site.name') }} </template>
  </GTFooter>
</template>
