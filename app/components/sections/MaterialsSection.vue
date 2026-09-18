<script setup lang="ts">
import { animate } from 'animejs'
import { materials } from '~/data/materials'

const props = defineProps<{
  detailTo?: string
}>()

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
  if (!img) return
  play(
    'mat-img',
    animate(img, {
      opacity: [0, 1],
      scale: [1.045, 1],
      duration: 720,
      ease: 'outCubic'
    })
  )
})
</script>

<template>
  <OfferBlock
    id="materials"
    invert
    :kicker="t('materials.kicker')"
    :spec="t('materials.spec')"
    :title="t('materials.title')"
  >
    <div ref="stage">
      <MediaFrame
        v-if="current"
        :key="current.id"
        :src="current.preview"
        :alt="t(`materials.items.${current.id}.name`)"
        ratio="4 / 5"
        sizes="(min-width: 960px) 46vw, 100vw"
        position="center"
      />
    </div>
    <template #body>
      <p v-if="current" class="cat">{{ t(`materials.items.${current.id}.category`) }}</p>
      <p v-if="current" class="lead">{{ t(`materials.items.${current.id}.summary`) }}</p>
      <div class="swatches" role="list">
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
      <AppButton v-if="props.detailTo" :to="props.detailTo" invert>{{ t('cta.more') }}</AppButton>
    </template>
  </OfferBlock>
</template>

<style scoped>
.cat {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint-bright);
  margin: 0 0 0.5rem;
}

.lead {
  margin: 0 0 1.1rem;
  font-size: 1.12rem;
  max-width: 36rem;
}

.swatches {
  display: grid;
  gap: 0.5rem;
  margin: 0 0 1.2rem;
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

.offer__visual :deep(.media) {
  border: var(--hair) solid var(--line-on-night);
}
</style>
