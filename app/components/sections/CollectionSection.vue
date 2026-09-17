<script setup lang="ts">
import { animate } from 'animejs'
import { products } from '~/data/products'

const { t } = useLocale()
const { openProduct, selectedSlug } = useConfigurator()
const reduced = useReducedMotion()
const { play } = useAnimeJob()

const edgeTones = {
  silver: '#E8E6E1',
  black: '#1C1916'
} as const

function pulseShot(event: MouseEvent, slug: string) {
  openProduct(slug)
  if (reduced.value) return
  const shot = (event.currentTarget as HTMLElement).querySelector('.sku__shot')
  if (!(shot instanceof HTMLElement)) return
  play(
    `sku-${slug}`,
    animate(shot, {
      scale: [1, 0.975, 1],
      duration: 460,
      ease: 'outQuad'
    })
  )
}

function liftShot(event: PointerEvent, on: boolean) {
  if (reduced.value) return
  const img = (event.currentTarget as HTMLElement).querySelector('.media__img')
  if (!(img instanceof HTMLElement)) return
  play(
    `sku-img-${(event.currentTarget as HTMLElement).dataset.slug}`,
    animate(img, {
      scale: on ? 1.04 : 1,
      duration: on ? 640 : 420,
      ease: 'outCubic',
      composition: 'replace'
    })
  )
}
</script>

<template>
  <section id="collection" class="col" aria-labelledby="col-title">
    <div class="col__head">
      <div>
        <SectionLabel :kicker="t('collection.kicker')" :spec="t('collection.spec')" />
        <h2 id="col-title">{{ t('collection.title') }}</h2>
      </div>
      <p>{{ t('collection.hint') }}</p>
    </div>

    <div
      class="col__skus"
      role="region"
      :aria-label="t('collection.shelfAria')"
      tabindex="0"
    >
      <button
        v-for="item in products"
        :key="item.slug"
        type="button"
        class="sku"
        :class="{ 'is-on': selectedSlug === item.slug }"
        :data-slug="item.slug"
        :aria-pressed="selectedSlug === item.slug"
        @click="pulseShot($event, item.slug)"
        @pointerenter="liftShot($event, true)"
        @pointerleave="liftShot($event, false)"
      >
        <span class="sku__shot">
          <MediaFrame
            :src="item.image"
            :alt="t(`products.${item.slug}.name`)"
            ratio="3 / 4"
            fit="contain"
            sizes="(min-width: 1100px) 22vw, (min-width: 720px) 44vw, 68vw"
          />
        </span>
        <h3>{{ t(`products.${item.slug}.name`) }}</h3>
        <p class="sku__edge">
          <span class="sku__dot" :style="{ background: edgeTones[item.edge] }" />
          {{ t(`config.edges.${item.edge}`) }}
        </p>
      </button>
    </div>
  </section>
</template>

<style scoped>
.col {
  padding: 0 var(--pad) var(--section);
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 1.8rem;
}

.col__head {
  display: grid;
  gap: 0.8rem;
}

.col__head p {
  color: var(--muted);
  max-width: 22rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.04em;
  margin-top: 0.7rem;
}

.col__skus {
  display: flex;
  gap: 0.85rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--pad);
  margin-inline: calc(-1 * var(--pad));
  padding-inline: var(--pad);
  padding-bottom: 0.35rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.col__skus:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 3px;
}

.sku {
  flex: 0 0 min(68vw, 16.5rem);
  scroll-snap-align: start;
  display: grid;
  gap: 0.65rem;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.sku__shot {
  display: block;
  overflow: hidden;
  background: #eceae6;
  border: var(--hair) solid var(--line);
  transition: border-color var(--duration-fast) var(--ease);
}

.sku__shot :deep(.media) {
  background: #eceae6;
}

.sku:hover .sku__shot,
.sku.is-on .sku__shot {
  border-color: var(--ink);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin: 0;
}

.sku__edge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.sku__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(20, 18, 16, 0.22);
}

.sku:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 3px;
}

@media (min-width: 720px) {
  .col__skus {
    display: grid;
    overflow: visible;
    scroll-snap-type: none;
    margin-inline: 0;
    padding-inline: 0;
    padding-bottom: 0;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem 1.4rem;
  }

  .sku {
    flex: none;
    scroll-snap-align: unset;
  }
}

@media (min-width: 980px) {
  .col__head {
    grid-template-columns: 1fr 0.7fr;
    align-items: end;
    gap: 2rem;
  }
}

@media (min-width: 1100px) {
  .col__skus {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sku__shot,
  .sku__shot :deep(.media__img) {
    transition: none;
  }
}
</style>
