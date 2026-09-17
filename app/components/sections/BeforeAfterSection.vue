<script setup lang="ts">
import { animate } from 'animejs'

const { t } = useLocale()
const reduced = useReducedMotion()
const { play } = useAnimeJob()
const { el, visible } = useReveal()
const pos = ref(86)
const dragging = ref(false)
const frame = ref<HTMLElement | null>(null)
const played = ref(false)

onMounted(() => {
  if (reduced.value) pos.value = 54
})

watch(visible, (on) => {
  if (!on || played.value || reduced.value) return
  played.value = true
  const proxy = { x: 86 }
  play(
    'ba',
    animate(proxy, {
      x: 54,
      duration: 1600,
      ease: 'inOutCubic',
      onUpdate: () => {
        if (!dragging.value) pos.value = proxy.x
      }
    })
  )
})

function setFromEvent(event: PointerEvent) {
  if (!frame.value) return
  const rect = frame.value.getBoundingClientRect()
  const next = ((event.clientX - rect.left) / rect.width) * 100
  pos.value = Math.min(92, Math.max(8, next))
}

function start(event: PointerEvent) {
  dragging.value = true
  frame.value?.setPointerCapture(event.pointerId)
  setFromEvent(event)
}

function move(event: PointerEvent) {
  if (dragging.value) setFromEvent(event)
}

function end() {
  dragging.value = false
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') pos.value = Math.max(8, pos.value - 4)
  if (event.key === 'ArrowRight') pos.value = Math.min(92, pos.value + 4)
}
</script>

<template>
  <section ref="el" id="compare" class="ba" aria-labelledby="ba-title">
    <SectionLabel :kicker="t('beforeAfter.kicker')" :spec="t('beforeAfter.spec')" />
    <h2 id="ba-title">{{ t('beforeAfter.title') }}</h2>
    <div
      ref="frame"
      class="ba__frame"
      @pointerdown="start"
      @pointermove="move"
      @pointerup="end"
      @pointercancel="end"
    >
      <img class="ba__after" src="/images/after-flush.jpg" :alt="t('beforeAfter.altAfter')">
      <div class="ba__before" :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }">
        <img src="/images/work-pair.jpg" :alt="t('beforeAfter.altBefore')">
      </div>
      <div class="ba__handle" :style="{ left: pos + '%' }">
        <button
          type="button"
          :aria-label="t('beforeAfter.aria')"
          :aria-valuemin="8"
          :aria-valuemax="92"
          :aria-valuenow="Math.round(pos)"
          role="slider"
          @keydown="onKey"
        />
      </div>
    </div>
    <div class="ba__labels">
      <span>{{ t('beforeAfter.before') }}</span>
      <span>{{ t('beforeAfter.after') }}</span>
    </div>
  </section>
</template>

<style scoped>
.ba {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  max-width: 16ch;
  margin: 0.8rem 0 1.4rem;
}

.ba__frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--stone);
  touch-action: none;
  cursor: ew-resize;
  user-select: none;
}

.ba__frame img,
.ba__before img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}

.ba__after {
  object-position: 50% 58%;
}

.ba__before img {
  object-position: 42% 88%;
}

.ba__before {
  position: absolute;
  inset: 0;
}

.ba__handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--paper);
  transform: translateX(-50%);
}

.ba__handle button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: var(--hair) solid var(--paper);
  background: var(--ink);
  transform: translate(-50%, -50%);
  cursor: ew-resize;
}

.ba__labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
