<script setup lang="ts">
  const route = useRoute();
  const config = useRuntimeConfig();
  const slug = (route.params.slug as string[])?.join('/') || '';

  // Uden projectId kan Sanity ikke hentes — kast 404 så error.vue overtager.
  if (!config.public.sanity?.projectId) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found', fatal: true });
  }

  const { data: page } = await useSanityQuery<{ title: string; body: unknown } | null>(
    `*[_type == "page" && slug.current == $slug][0]{ title, body }`,
    { slug },
  );

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found', fatal: true });
  }

  useSeoMeta({
    title: () => page.value?.title || slug,
  });
</script>

<template>
  <div class="container py-8">
    <div class="max-w-prose">
      <h1 class="text-3xl font-bold mb-4 font-heading">
        {{ page?.title }}
      </h1>
      <SanityContent v-if="page?.body" :blocks="page.body" />
    </div>
  </div>
</template>
