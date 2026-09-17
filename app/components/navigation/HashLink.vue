<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const { go } = useHashLink()
</script>

<template>
  <a :href="props.to.startsWith('#') ? props.to : `#${props.to}`" @click.prevent="go(props.to)">
    <slot />
  </a>
</template>
