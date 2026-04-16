<script setup lang="ts">
const { isDark, toggleMode } = useThemeSwitch();
</script>

<template>
  <GTButton
    variant="unstyled"
    size="sm"
    :aria-label="isDark ? 'Skift til lyst tema' : 'Skift til mørkt tema'"
    @click="toggleMode"
  >
    {{ isDark ? '☀️' : '🌙' }}
  </GTButton>
</template>
