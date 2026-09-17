<script setup lang="ts">
const { t, ta } = useLocale()

usePageSeo(() => ({
  title: t('architects.title'),
  description: t('architects.text'),
  path: '/architects',
  image: '/images/work-pair.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <ArchitectsTeaser />
    <ul>
      <li v-for="item in ta('architects.points')" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.2rem) 0 var(--section);
}

ul {
  list-style: none;
  padding: 0 var(--pad);
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 0.5rem;
  font-family: var(--font-spec);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
