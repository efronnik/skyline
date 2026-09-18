<script setup lang="ts">
const props = withDefaults(defineProps<{
  slides: string[]
  alt: string
  ratio?: string
  fit?: 'cover' | 'contain'
  interval?: number
  fill?: boolean
  controls?: boolean
}>(), {
  ratio: '4 / 5',
  fit: 'cover',
  interval: 5200,
  fill: false,
  controls: true
})

const { t } = useLocale()
const reduced = useReducedMotion()
const index = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function go(next: number) {
  const total = props.slides.length
  if (total < 2) return
  index.value = (next + total) % total
}

function start() {
  stop()
  if (reduced.value || props.slides.length < 2) return
  timer = setInterval(() => go(index.value + 1), props.interval)
}

function stop() {
  if (timer) clearInterval(timer)
  timer = undefined
}

watch(() => props.slides, () => {
  index.value = 0
  start()
})

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <div
    class="show"
    :class="{ 'show--fill': fill }"
    :style="fill ? undefined : { aspectRatio: ratio }"
    :aria-label="alt"
    @pointerenter="stop"
    @pointerleave="start"
  >
    <img
      v-for="(src, i) in slides"
      :key="src"
      :src="src"
      :alt="i === index ? alt : ''"
      class="show__img"
      :class="{ 'is-on': i === index }"
      :style="{ objectFit: fit }"
      :loading="i === 0 ? 'eager' : 'lazy'"
    >
    <div v-if="controls && slides.length > 1" class="show__nav">
      <button type="button" :aria-label="t('pdp.prevShot')" @click="go(index - 1)">‹</button>
      <ol>
        <li v-for="(_, i) in slides" :key="i">
          <button
            type="button"
            :aria-current="i === index ? 'true' : undefined"
            :aria-label="`${i + 1}`"
            @click="go(i)"
          />
        </li>
      </ol>
      <button type="button" :aria-label="t('pdp.nextShot')" @click="go(index + 1)">›</button>
    </div>
  </div>
</template>

<style scoped>
.show {
  position: relative;
  overflow: hidden;
  background: var(--stone);
  width: 100%;
}

.show--fill {
  position: absolute;
  inset: 0;
  height: 100%;
}

.show__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-position: center;
  opacity: 0;
  transition: opacity 0.7s ease;
}

.show__img.is-on {
  opacity: 1;
}

.show__nav {
  position: absolute;
  inset: auto 0.4rem 0.4rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
}

.show__nav > button {
  width: 44px;
  height: 44px;
  border: 0;
  background: color-mix(in srgb, var(--paper) 78%, transparent);
  color: var(--ink);
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
}

ol {
  display: flex;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

ol button {
  width: 10px;
  height: 10px;
  min-height: 10px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--paper) 55%, transparent);
  cursor: pointer;
}

ol button[aria-current='true'] {
  background: var(--paper);
}

.show--fill .show__nav {
  inset: calc(var(--header) + 0.45rem) 0.6rem auto;
}

@media (prefers-reduced-motion: reduce) {
  .show__img {
    transition: none;
  }
}
</style>
