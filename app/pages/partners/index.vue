<script setup lang="ts">
const { t, ta } = useLocale()
const { open } = usePartnerModal()

usePageSeo(() => ({
  title: t('partners.title'),
  description: t('partners.lead'),
  path: '/partners'
}))
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel :kicker="t('partners.kicker')" :spec="t('partners.spec')" />
      <h1>{{ t('partners.title') }}</h1>
      <p>{{ t('partners.lead') }}</p>
      <ul>
        <li v-for="item in ta('partners.audience')" :key="item">{{ item }}</li>
      </ul>
      <p v-for="item in ta('partners.paragraphs')" :key="item">{{ item }}</p>
      <p class="page__note">{{ t('partners.note') }}</p>
      <AppButton @click="open()">{{ t('partners.cta') }}</AppButton>
    </header>
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
  max-width: 10em;
  overflow-wrap: break-word;
}

p {
  font-size: 1.12rem;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1.1rem 0 0;
  display: grid;
  gap: 0.35rem;
  font-family: var(--font-spec);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.page__note {
  margin: 1.2rem 0 1.4rem;
  max-width: 36rem;
}
</style>
