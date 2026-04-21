<script setup lang="ts">
  const { t } = useI18n();
  const { hasDecided, accept, reject, load } = useCookieConsent();

  onMounted(() => load());
</script>

<template>
  <GTCookieMessage
    v-if="!hasDecided"
    :heading="t('cookie.heading')"
    :accept-label="t('cookie.accept')"
    :reject-label="t('cookie.reject')"
    :aria-label="t('cookie.heading')"
    @accept="accept"
    @reject="reject"
  >
    {{ t('cookie.body') }}
  </GTCookieMessage>
</template>
