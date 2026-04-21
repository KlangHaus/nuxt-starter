<script setup lang="ts">
  const { locale, locales, setLocale } = useI18n();

  const otherLocales = computed(() =>
    (locales.value as { code: string; name: string }[]).filter((l) => l.code !== locale.value),
  );

  const current = computed(() => locale.value.toUpperCase());
</script>

<template>
  <div class="language-switcher">
    <GTButton
      v-for="l in otherLocales"
      :key="l.code"
      variant="unstyled"
      size="sm"
      :aria-label="`Skift sprog til ${l.name}`"
      @click="setLocale(l.code as 'da' | 'en')"
    >
      {{ current }} → {{ l.code.toUpperCase() }}
    </GTButton>
  </div>
</template>

<style scoped lang="scss">
  .language-switcher {
    display: inline-flex;
    gap: 0.25rem;
  }
</style>
