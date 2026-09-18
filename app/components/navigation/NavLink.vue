<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const isHash = computed(() => props.to.startsWith('#'))
</script>

<template>
  <HashLink v-if="isHash" :to="props.to">
    <slot />
  </HashLink>
  <NuxtLink v-else :to="props.to">
    <slot />
  </NuxtLink>
</template>
