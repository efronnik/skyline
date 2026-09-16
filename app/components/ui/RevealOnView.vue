<script setup lang="ts">
const { el, visible } = useReveal()
</script>

<template>
  <div ref="el" class="reveal" :class="{ 'is-in': visible }">
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 700ms var(--ease), transform 700ms var(--ease);
}

.reveal.is-in {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
  }
}
</style>
