<script setup lang="ts">
const { t } = useLocale()

usePageSeo(() => ({
  title: t('legal.cookiesTitle'),
  description: t('legal.cookies1'),
  path: '/cookies'
}))

const blocks1 = computed(() => t('legal.cookies1').split('\n\n').filter(Boolean))
const blocks2 = computed(() => t('legal.cookies2').split('\n\n').filter(Boolean))
</script>

<template>
  <article class="page">
    <p class="spec">{{ t('legal.privacyUpdated') }}</p>
    <h1>{{ t('legal.cookiesTitle') }}</h1>
    <p v-for="b in blocks1" :key="b" class="lead">{{ b }}</p>
    <div class="sections">
      <p v-for="b in blocks2" :key="b">{{ b }}</p>
    </div>
    <p class="back">
      <NuxtLink to="/privacy">← {{ t('legal.privacyTitle') }}</NuxtLink>
    </p>
  </article>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 40rem;
  margin: 0 auto;
}

.spec {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 0.7rem;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.03em;
  margin: 0 0 1.2rem;
}

.lead {
  color: var(--ink-soft);
  margin: 0 0 1.6rem;
}

.sections {
  border-top: var(--hair) solid var(--line);
  padding-top: 1.2rem;
  display: grid;
  gap: 1rem;
}

.sections p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.65;
  white-space: pre-line;
}

.back {
  margin-top: 2rem;
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-underline-offset: 0.2em;
}
</style>
