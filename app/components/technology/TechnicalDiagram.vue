<script setup lang="ts">
import { animate } from 'animejs'

const props = defineProps<{
  active: number
}>()

const { t } = useLocale()
const reduced = useReducedMotion()
const { play } = useAnimeJob()
const root = ref<HTMLElement | null>(null)

function paint() {
  const items = root.value?.querySelectorAll<SVGElement>('[data-mech]')
  if (!items?.length) return
  if (reduced.value) {
    for (const item of items) {
      const step = Number(item.dataset.mech)
      const on = item.dataset.mode === 'upto' ? step <= props.active : step === props.active
      item.style.opacity = on ? '1' : '0.22'
    }
    return
  }
  play(
    'diagram',
    animate(items, {
      opacity: (el) => {
        const node = el as SVGElement
        const step = Number(node.dataset.mech)
        const on = node.dataset.mode === 'upto' ? step <= props.active : step === props.active
        return on ? 1 : 0.22
      },
      duration: 420,
      ease: 'outQuad',
      composition: 'replace'
    })
  )
}

onMounted(() => {
  paint()
  watch(() => props.active, paint)
})
</script>

<template>
  <div ref="root" class="diagram" role="img" :aria-label="`${t('technology.diagramAria')}, ${active + 1}`">
    <svg viewBox="0 0 420 460" fill="none">
      <rect x="90" y="30" width="240" height="400" stroke="currentColor" stroke-opacity="0.22" />
      <path
        data-mech="0"
        d="M118 58 V402"
        stroke="currentColor"
        stroke-width="3"
      />
      <circle data-mech="1" cx="118" cy="140" r="6" fill="currentColor" />
      <circle data-mech="1" cx="118" cy="300" r="6" fill="currentColor" />
      <rect
        data-mech="2"
        data-mode="upto"
        x="118"
        y="58"
        width="184"
        height="344"
        stroke="currentColor"
      />
      <path
        data-mech="3"
        data-mode="upto"
        d="M302 58 V402"
        stroke="currentColor"
        stroke-dasharray="4 6"
      />
      <path
        data-mech="4"
        data-mode="upto"
        d="M90 430 H330"
        stroke="currentColor"
      />
    </svg>
    <p>{{ t('technology.diagram') }}</p>
  </div>
</template>

<style scoped>
.diagram {
  border: var(--hair) solid var(--line);
  padding: 1.1rem;
  color: var(--ink);
}

svg {
  width: 100%;
  height: auto;
}

[data-mech] {
  opacity: 0.22;
}

p {
  margin-top: 0.7rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
