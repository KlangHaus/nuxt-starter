<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('home.title'),
  description: t('home.description'),
});
</script>

<template>
  <div class="container py-8">
    <div class="max-w-prose mx-auto">
      <h1 class="text-4xl font-bold mb-4 font-heading">
        {{ t('home.heading') }}
      </h1>
      <p class="text-lg text-secondary mb-6">
        {{ t('home.intro') }}
      </p>

      <div class="flex gap-3">
        <GTButton variant="primary" as="a" href="/about">
          {{ t('home.cta') }}
        </GTButton>
        <GTButton variant="outlined" as="a" :href="t('home.docsUrl')">
          {{ t('home.docs') }}
        </GTButton>
      </div>

      <hr class="border-light my-8">

      <GTAlert variant="info" :heading="t('home.alertHeading')">
        {{ t('home.alertBody') }}
      </GTAlert>
    </div>
  </div>
</template>
