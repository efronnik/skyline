<script setup lang="ts">
interface Props {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  ratio?: string
  width?: number
  height?: number
}

withDefaults(defineProps<Props>(), {
  sizes: 'sm:100vw md:100vw lg:100vw',
  ratio: '16 / 9',
  width: 1600,
  height: 900
})
</script>

<template>
  <figure class="media" :style="{ aspectRatio: ratio }">
    <NuxtImg
      :src="src"
      :alt="alt"
      :sizes="sizes"
      :width="width"
      :height="height"
      :preload="priority"
      :loading="priority ? 'eager' : 'lazy'"
      format="webp"
      class="media__img"
    />
  </figure>
</template>

<style scoped>
.media {
  margin: 0;
  position: relative;
  overflow: hidden;
  background: var(--stone);
}

.media__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
