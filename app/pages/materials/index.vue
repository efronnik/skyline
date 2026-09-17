<script setup lang="ts">
const { t } = useLocale()

usePageSeo(() => ({
  title: t('materials.kicker'),
  description: t('materials.title'),
  path: '/materials',
  image: '/images/material-plaster.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <MaterialsSection />
    <CtaBand />
  </div>
</template>

<style scoped>
.page {
  padding-top: var(--header);
}
</style>
