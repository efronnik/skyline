<script setup lang="ts">
const { t, tl } = useLocale()

const sections = computed(() => tl<{ title: string, text: string }>('legal.privacySections'))

usePageSeo(() => ({
  title: t('legal.privacyTitle'),
  description: t('legal.privacyLead'),
  path: '/privacy'
}))
</script>

<template>
  <article class="page">
    <p class="spec">{{ t('legal.privacyUpdated') }}</p>
    <h1>{{ t('legal.privacyTitle') }}</h1>
    <p class="lead">{{ t('legal.privacyLead') }}</p>

    <section v-for="item in sections" :key="item.title">
      <h2>{{ item.title }}</h2>
      <p>{{ item.text }}</p>
      <p v-if="item.title === t('legal.cookiesTitle')" class="more">
        <NuxtLink to="/cookies">{{ t('legal.cookiesLink') }} →</NuxtLink>
      </p>
    </section>
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
  margin: 0 0 1rem;
}

.lead,
p {
  color: var(--ink-soft);
}

.lead {
  margin-bottom: 2rem;
}

section {
  padding: 1.15rem 0;
  border-top: var(--hair) solid var(--line);
}

h2 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 0.45rem;
}

section p {
  margin: 0;
}

section p + p {
  margin-top: 0.55rem;
}

a {
  color: inherit;
  text-underline-offset: 0.2em;
}
</style>
