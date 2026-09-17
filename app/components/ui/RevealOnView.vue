<script setup lang="ts">
import { animate, stagger as staggerOf } from 'animejs'

const props = defineProps<{
  stagger?: string
}>()

const { el, visible } = useReveal()
const reduced = useReducedMotion()
const { play } = useAnimeJob()

function hideKids() {
  if (!el.value || !props.stagger || reduced.value) return
  for (const node of el.value.querySelectorAll<HTMLElement>(props.stagger))
    node.style.opacity = '0'
}

onMounted(hideKids)

watch(visible, (on) => {
  if (!el.value) return
  if (reduced.value) {
    el.value.style.opacity = '1'
    if (props.stagger) {
      for (const node of el.value.querySelectorAll<HTMLElement>(props.stagger))
        node.style.opacity = '1'
    }
    return
  }
  if (!on) return

  if (props.stagger) {
    const nodes = el.value.querySelectorAll<HTMLElement>(props.stagger)
    if (nodes.length) {
      el.value.style.opacity = '1'
      play(
        'reveal',
        animate(nodes, {
          opacity: [0, 1],
          y: [22, 0],
          delay: staggerOf(85),
          duration: 740,
          ease: 'outCubic'
        })
      )
      return
    }
  }

  play(
    'reveal',
    animate(el.value, {
      opacity: [0, 1],
      y: [16, 0],
      duration: 720,
      ease: 'outCubic'
    })
  )
})
</script>

<template>
  <div ref="el" class="reveal" :class="{ 'is-kids': stagger }">
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
}

.reveal.is-kids {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal.is-kids {
    opacity: 1;
  }
}
</style>
