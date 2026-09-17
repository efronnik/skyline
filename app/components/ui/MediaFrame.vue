<script setup lang="ts">
interface Props {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  ratio?: string
  position?: string
  fit?: 'cover' | 'contain'
}

withDefaults(defineProps<Props>(), {
  sizes: '100vw',
  ratio: '3 / 4',
  position: 'center',
  fit: 'cover'
})
</script>

<template>
  <figure class="media" :style="{ aspectRatio: ratio }">
    <img
      :src="src"
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'low'"
      decoding="async"
      class="media__img"
      :style="{ objectPosition: position, objectFit: fit }"
    >
  </figure>
</template>

<style scoped>
.media {
  margin: 0;
  position: relative;
  overflow: hidden;
  background: var(--stone);
  width: 100%;
}

.media__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
}
</style>
