<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="empty">
    <p class="empty__title">{{ title }}</p>
    <p>{{ text }}</p>
    <slot />
  </div>
</template>

<style scoped>
.empty {
  border: var(--hair) solid var(--line);
  padding: var(--space-7) var(--pad);
}

.empty__title {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  margin-bottom: 0.6rem;
}
</style>
