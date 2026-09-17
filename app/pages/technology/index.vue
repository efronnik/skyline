<script setup lang="ts">
const { t } = useLocale()

usePageSeo(() => ({
  title: t('technology.kicker'),
  description: t('technology.title'),
  path: '/technology',
  image: '/images/detail-hinge.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <TechnologySection />
    <CtaBand />
  </div>
</template>

<style scoped>
.page {
  padding-top: calc(var(--header) + 0.4rem);
}
</style>
