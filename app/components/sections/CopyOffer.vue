<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string
  copyKey: string
  src: string
  slides?: string[]
  ctaTo: string
  invert?: boolean
  image?: 'left' | 'right'
  ratio?: string
}>(), {
  invert: false,
  image: 'left',
  ratio: '4 / 5',
  slides: () => []
})

const { t } = useLocale()
</script>

<template>
  <OfferBlock
    :id="props.id"
    :kicker="t(`${copyKey}.kicker`)"
    :spec="t(`${copyKey}.spec`)"
    :title="t(`${copyKey}.title`)"
    :invert="props.invert"
    :image="props.image"
  >
    <PhotoShow
      v-if="props.slides.length"
      :slides="props.slides"
      :alt="t(`${copyKey}.alt`)"
      :ratio="props.ratio"
    />
    <MediaFrame
      v-else
      :src="props.src"
      :alt="t(`${copyKey}.alt`)"
      :ratio="props.ratio"
      sizes="(min-width: 960px) 46vw, 100vw"
      position="center"
    />
    <template #body>
      <p class="lead">{{ t(`${copyKey}.text`) }}</p>
      <AppButton :to="props.ctaTo" :invert="props.invert">{{ t('cta.more') }}</AppButton>
    </template>
  </OfferBlock>
</template>

<style scoped>
.lead {
  margin: 0 0 1.2rem;
  font-size: 1.12rem;
  max-width: 38rem;
}

.offer--invert .lead,
:deep(.lead) {
  color: inherit;
}
</style>
