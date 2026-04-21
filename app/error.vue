<script setup lang="ts">
  import type { NuxtError } from '#app';

  const props = defineProps<{ error: NuxtError }>();
  const { t } = useI18n();

  const isNotFound = computed(() => props.error.statusCode === 404);

  const title = computed(() => (isNotFound.value ? t('error.notFound') : t('error.generic')));
  const description = computed(() =>
    isNotFound.value ? t('error.notFoundDesc') : t('error.genericDesc'),
  );

  useSeoMeta({ title: title.value, robots: 'noindex' });

  const handleReset = () => clearError({ redirect: '/' });
</script>

<template>
  <NuxtLayout>
    <div class="container py-8">
      <div class="max-w-prose mx-auto text-center">
        <p class="text-sm text-secondary mb-2">{{ error.statusCode }}</p>
        <h1 class="text-4xl font-bold mb-4 font-heading">{{ title }}</h1>
        <p class="text-lg text-secondary mb-6">{{ description }}</p>
        <GTButton variant="primary" @click="handleReset">
          {{ t('error.back') }}
        </GTButton>
      </div>
    </div>
  </NuxtLayout>
</template>
