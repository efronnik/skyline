<script setup lang="ts">
const { t } = useLocale()

usePageSeo(() => ({
  title: t('legal.cookiesTitle'),
  description: t('legal.cookies1'),
  path: '/cookies'
}))
</script>

<template>
  <article class="page">
    <h1>{{ t('legal.cookiesTitle') }}</h1>
    <p>{{ t('legal.cookies1') }}</p>
    <p>{{ t('legal.cookies2') }}</p>
  </article>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 40rem;
  margin: 0 auto;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  margin-bottom: 1rem;
}

p + p {
  margin-top: 1rem;
}
</style>
