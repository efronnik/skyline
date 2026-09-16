<script setup lang="ts">
const pos = ref(54)
const dragging = ref(false)
const frame = ref<HTMLElement | null>(null)

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
  <section class="ba" aria-labelledby="ba-title">
    <SectionLabel kicker="Сравнение" spec="05 — Before / After" />
    <h2 id="ba-title">Обычная дверь. Затем — стена.</h2>
    <div
      ref="frame"
      class="ba__frame"
      @pointerdown="start"
      @pointermove="move"
      @pointerup="end"
      @pointercancel="end"
    >
      <img src="/images/after-flush.png" alt="Стена со скрытой дверью после интеграции">
      <div class="ba__before" :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }">
        <img src="/images/before-classic.png" alt="Обычная дверь с наличником до интеграции">
      </div>
      <div class="ba__handle" :style="{ left: pos + '%' }">
        <button
          type="button"
          aria-label="Сравнить до и после"
          :aria-valuemin="8"
          :aria-valuemax="92"
          :aria-valuenow="Math.round(pos)"
          role="slider"
          @keydown="onKey"
        />
      </div>
    </div>
    <div class="ba__labels">
      <span>Наличник</span>
      <span>Плоскость</span>
    </div>
  </section>
</template>

<style scoped>
.ba {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 14ch;
  margin: 1rem 0 var(--space-6);
}

.ba__frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: var(--stone);
  touch-action: none;
  cursor: ew-resize;
  user-select: none;
}

.ba__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ba__before {
  position: absolute;
  inset: 0;
}

.ba__before img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: var(--hair) solid var(--paper);
  background: var(--ink);
  transform: translate(-50%, -50%);
  cursor: ew-resize;
}

.ba__labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
