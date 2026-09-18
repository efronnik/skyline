<script setup lang="ts">
const { t, ta } = useLocale()

usePageSeo(() => ({
  title: t('nav.about'),
  description: t('seo.homeDesc'),
  path: '/about',
  image: '/images/hero-poster.jpg',
  noindex: true
}))
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel :kicker="t('nav.about')" :spec="t('nav.about')" />
      <h1>{{ t('studio.title') }}</h1>
      <p v-for="item in ta('studio.paragraphs')" :key="item">{{ item }}</p>
    </header>
    <CtaBand />
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 44rem;
  margin: 0 auto;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  margin: 0.8rem 0;
  max-width: 8.2em;
  overflow-wrap: break-word;
}

p {
  font-size: 1.12rem;
}

p + p {
  margin-top: 0.9rem;
}
</style>
