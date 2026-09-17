<script setup lang="ts">
import { animate } from 'animejs'
import { qualityDetails } from '~/data/technical'

const { t } = useLocale()
const reduced = useReducedMotion()
const { play } = useAnimeJob()

function lift(event: PointerEvent, on: boolean, id: string) {
  if (reduced.value) return
  const img = (event.currentTarget as HTMLElement).querySelector('.media__img')
  if (!(img instanceof HTMLElement)) return
  play(
    `qual-${id}`,
    animate(img, {
      scale: on ? 1.045 : 1,
      duration: on ? 700 : 420,
      ease: 'outCubic',
      composition: 'replace'
    })
  )
}
</script>

<template>
  <section id="quality" class="qual" aria-labelledby="qual-title">
    <SectionLabel :kicker="t('quality.kicker')" :spec="t('quality.spec')" />
    <h2 id="qual-title">{{ t('quality.title') }}</h2>
    <div class="qual__grid">
      <article
        v-for="item in qualityDetails"
        :key="item.id"
        @pointerenter="lift($event, true, item.id)"
        @pointerleave="lift($event, false, item.id)"
      >
        <MediaFrame
          :src="item.image"
          :alt="t(`quality.items.${item.id}.title`)"
          :ratio="item.ratio"
          sizes="(min-width: 800px) 30vw, 100vw"
        />
        <h3>{{ t(`quality.items.${item.id}.title`) }}</h3>
        <p>{{ t(`quality.items.${item.id}.text`) }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.qual {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 0.8rem 0 1.4rem;
}

.qual__grid {
  display: grid;
  gap: 1.4rem;
}

article :deep(.media) {
  overflow: hidden;
}

h3 {
  font-family: var(--font-display);
  margin: 0.7rem 0 0.35rem;
}

p {
  color: var(--muted);
}

@media (min-width: 800px) {
  .qual__grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
</style>
