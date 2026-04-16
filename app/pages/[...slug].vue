<script setup lang="ts">
const route = useRoute();
const slug = (route.params.slug as string[])?.join('/') || '';

const { data: page } = useSanityQuery(
  `*[_type == "page" && slug.current == $slug][0]{ title, body }`,
  { slug },
);

useSeoMeta({
  title: () => page.value?.title || slug,
});
</script>

<template>
  <div class="container py-8">
    <div class="max-w-prose">
      <template v-if="page">
        <h1 class="text-3xl font-bold mb-4 font-heading">
          {{ page.title }}
        </h1>
        <SanityContent v-if="page.body" :blocks="page.body" />
      </template>

      <GTErrorPage
        v-else
        code="404"
        :title="$t('error.notFound')"
        :description="$t('error.notFoundDesc')"
      />
    </div>
  </div>
</template>
