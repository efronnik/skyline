<script setup lang="ts">
const { t } = useLocale()
const { open: openAsk } = useConsultModal()

usePageSeo(() => ({
  title: t('offers.hardware.title'),
  description: t('offers.hardware.text'),
  path: '/hardware'
}))
</script>

<template>
  <div class="page">
    <header class="page__hero">
      <SectionLabel :kicker="t('offers.hardware.kicker')" :spec="t('offers.hardware.spec')" />
      <h1>{{ t('offers.hardware.title') }}</h1>
      <p>{{ t('offers.hardware.text') }}</p>
    </header>

    <div class="page__soon">
      <p>{{ t('offers.hardware.comingSoon') }}</p>
      <AppButton @click="openAsk()">{{ t('hero.cta1') }}</AppButton>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 44rem;
  margin: 0 auto;
}

.page__hero {
  margin-bottom: 2.4rem;
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
  max-width: 38rem;
}

.page__soon {
  display: grid;
  gap: 1.4rem;
  padding: var(--space-7) var(--pad);
  background: var(--night);
  color: var(--paper);
  max-width: 100%;
  margin: 0 calc(-1 * var(--pad));
}

.page__soon p {
  max-width: 34rem;
  opacity: 0.8;
}
</style>
