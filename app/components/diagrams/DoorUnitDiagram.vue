<script setup lang="ts">
import { idoorsSizes, widthRange } from '~/data/idoorsSpec'

const props = withDefaults(defineProps<{
  swing?: 'in' | 'out'
  mode?: 'leaf' | 'unit'
}>(), {
  swing: 'out',
  mode: 'leaf'
})

const { t } = useLocale()
const size = computed(() => idoorsSizes[props.swing])
const mm = computed(() => t('specs.mm'))

const leafH = computed(() => `${size.value.leafH} ${mm.value}`)
const leafW = computed(() => `${widthRange(size.value.leafW)} ${mm.value}`)
const openingW = computed(() => `${widthRange(size.value.openingW)} ${mm.value}`)
const blockH = computed(() => `${size.value.blockH} ${mm.value}`)
const blockW = computed(() => `${widthRange(size.value.blockW)} ${mm.value}`)
</script>

<template>
  <figure class="diagram" role="img" :aria-label="t('technology.diagramAria')">
    <svg viewBox="0 0 360 460" fill="none" aria-hidden="true">
      <rect x="78" y="36" width="196" height="368" stroke="currentColor" stroke-opacity="0.22" />
      <rect
        v-if="mode === 'unit'"
        x="92"
        y="50"
        width="168"
        height="340"
        stroke="currentColor"
        stroke-opacity="0.45"
      />
      <rect x="108" y="66" width="136" height="308" stroke="currentColor" stroke-width="1.4" />
      <path d="M108 66 H244 V374" stroke="currentColor" stroke-opacity="0.28" />
      <path d="M244 66 V374" stroke="currentColor" stroke-dasharray="4 5" stroke-opacity="0.55" />

      <path d="M48 66 V374" stroke="currentColor" stroke-opacity="0.4" />
      <path d="M42 66 H54" stroke="currentColor" />
      <path d="M42 374 H54" stroke="currentColor" />
      <text x="36" y="228" text-anchor="middle" transform="rotate(-90 36 228)">
        {{ mode === 'unit' ? blockH : leafH }}
      </text>

      <path d="M108 402 H244" stroke="currentColor" stroke-opacity="0.4" />
      <path d="M108 396 V408" stroke="currentColor" />
      <path d="M244 396 V408" stroke="currentColor" />
      <text x="176" y="424" text-anchor="middle">{{ leafW }}</text>

      <path d="M78 438 H274" stroke="currentColor" stroke-opacity="0.4" />
      <path d="M78 432 V444" stroke="currentColor" />
      <path d="M274 432 V444" stroke="currentColor" />
      <text x="176" y="456" text-anchor="middle">
        {{ mode === 'unit' ? blockW : openingW }}
      </text>
    </svg>
    <figcaption>{{ t('technology.diagram') }}</figcaption>
  </figure>
</template>

<style scoped>
.diagram {
  margin: 0;
  padding: 1rem 1rem 0.85rem;
  border: var(--hair) solid var(--line);
  background: color-mix(in srgb, var(--paper) 88%, white);
  color: var(--ink);
}

svg {
  display: block;
  width: 100%;
  height: auto;
}

text {
  font-family: var(--font-spec);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  fill: currentColor;
}

figcaption {
  display: grid;
  gap: 0.15rem;
  margin-top: 0.7rem;
  padding-top: 0.7rem;
  border-top: var(--hair) solid var(--line);
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

figcaption span {
  color: var(--muted);
}

.offer--invert .diagram,
:deep(.offer--invert) .diagram {
  border-color: var(--line-on-night);
}
</style>
