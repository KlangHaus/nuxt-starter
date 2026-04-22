<script setup lang="ts">
  const { t } = useI18n();
  const appConfig = useAppConfig() as { site?: { name?: string } };
  const siteName = computed(() => t('site.name') || appConfig.site?.name || '');

  useSeoMeta({
    titleTemplate: (title) => (title ? `${title} — ${siteName.value}` : siteName.value),
    ogType: 'website',
    ogSiteName: siteName,
    ogImage: '/og-default.png', // læg et 1200×630 billede i /public/
    twitterCard: 'summary_large_image',
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
