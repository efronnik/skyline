<script setup lang="ts">
import { animate } from 'animejs'
import { materials } from '~/data/materials'

const { t } = useLocale()
const reduced = useReducedMotion()
const { play } = useAnimeJob()
const active = ref(materials[0]?.id ?? 'paint')
const current = computed(() => materials.find(item => item.id === active.value) ?? materials[0])
const stage = ref<HTMLElement | null>(null)

watch(active, async () => {
  await nextTick()
  if (reduced.value || !stage.value) return
  const img = stage.value.querySelector('.media__img')
  const copy = stage.value.querySelector('.mat__copy')
  if (img)
    play(
      'mat-img',
      animate(img, {
        opacity: [0, 1],
        scale: [1.045, 1],
        duration: 720,
        ease: 'outCubic'
      })
    )
  if (copy)
    play(
      'mat-copy',
      animate(copy, {
        opacity: [0, 1],
        y: [12, 0],
        duration: 560,
        ease: 'outCubic'
      })
    )
})
</script>

<template>
  <section id="materials" class="mat" aria-labelledby="mat-title">
    <div class="mat__intro">
      <SectionLabel :kicker="t('materials.kicker')" :spec="t('materials.spec')" />
      <h2 id="mat-title">{{ t('materials.title') }}</h2>
    </div>
    <div ref="stage" class="mat__stage">
      <MediaFrame
        v-if="current"
        :key="current.id"
        :src="current.preview"
        :alt="t(`materials.items.${current.id}.name`)"
        ratio="16 / 10"
        sizes="(min-width: 980px) 60vw, 100vw"
        position="center"
      />
      <div v-if="current" class="mat__copy">
        <p class="mat__cat">{{ t(`materials.items.${current.id}.category`) }}</p>
        <h3>{{ t(`materials.items.${current.id}.name`) }}</h3>
        <p>{{ t(`materials.items.${current.id}.summary`) }}</p>
      </div>
    </div>
    <div class="mat__swatches" role="list">
      <button
        v-for="item in materials"
        :key="item.id"
        type="button"
        class="swatch"
        :class="{ 'is-on': item.id === active }"
        :aria-pressed="item.id === active"
        @click="active = item.id"
      >
        <img :src="item.image" alt="" width="72" height="72">
        <span>{{ t(`materials.items.${item.id}.name`) }}</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.mat {
  padding: var(--section) var(--pad);
  background: var(--night);
  color: var(--paper);
}

.mat__intro,
.mat__stage,
.mat__swatches {
  max-width: var(--max);
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 16ch;
  margin-top: 0.8rem;
}

.mat__stage {
  display: grid;
  gap: 1.2rem;
  margin: 1.4rem 0;
}

.mat__cat {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint-bright);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  margin: 0.35rem 0 0.6rem;
}

.mat__stage :deep(.media__img) {
  will-change: transform, opacity;
}

.mat__swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.swatch {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
  gap: 0.7rem;
  min-height: 64px;
  padding: 0;
  border: var(--hair) solid var(--line-on-night);
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease);
}

.swatch img {
  width: 64px;
  height: 64px;
  max-width: none;
  object-fit: cover;
}

.swatch span {
  font-family: var(--font-spec);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding-right: 0.5rem;
}

.swatch.is-on,
.swatch:hover {
  border-color: var(--paper);
}

@media (min-width: 800px) {
  .mat__swatches {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 980px) {
  .mat__stage {
    grid-template-columns: 1.35fr 0.65fr;
    align-items: end;
  }
}

@media (prefers-reduced-motion: reduce) {
  .swatch {
    transition: none;
  }
}
</style>
