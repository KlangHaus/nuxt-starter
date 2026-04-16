<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('about.title'),
  description: t('about.description'),
});
</script>

<template>
  <div class="container py-8">
    <GTBreadcrumb
      :items="[
        { label: t('nav.home'), href: '/' },
        { label: t('nav.about') },
      ]"
    />

    <div class="max-w-prose mt-6">
      <h1 class="text-3xl font-bold mb-4 font-heading">
        {{ t('about.heading') }}
      </h1>
      <p class="text-secondary leading-relaxed">
        {{ t('about.body') }}
      </p>
    </div>
  </div>
</template>
