<script setup lang="ts">
const { t, ta } = useLocale()
const { open } = usePartnerModal()

usePageSeo(() => ({
  title: t('partners.cta'),
  description: t('partners.intro'),
  path: '/partners'
}))
</script>

<template>
  <div class="page">

    <header class="page__header">
      <SectionLabel :kicker="t('partners.kicker')" :spec="t('partners.spec')" />
      <h1>{{ t('partners.cta') }}</h1>
      <p class="page__lead">{{ t('partners.lead') }}</p>
    </header>

    <section class="page__section">
      <p>{{ t('partners.intro') }}</p>
      <p class="page__network">{{ t('partners.network') }}</p>

      <ul class="page__segments">
        <li v-for="item in ta('partners.segments')" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="page__format">
      <h2>{{ t('partners.formatTitle') }}</h2>
      <p>{{ t('partners.formatText') }}</p>
      <ul class="page__offers">
        <li v-for="item in ta('partners.offers')" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="page__cta">
      <p>{{ t('partners.note') }}</p>
      <AppButton @click="open()">{{ t('partners.cta') }}</AppButton>
    </section>

  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 44rem;
  margin: 0 auto;
}

.page__header {
  margin-bottom: 2rem;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  margin: 0.8rem 0 0;
  max-width: 10em;
  overflow-wrap: break-word;
}

.page__lead {
  margin-top: 0.6rem;
  font-family: var(--font-spec);
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.page__section {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.4rem;
}

p {
  font-size: 1.1rem;
  margin: 0;
}

.page__network {
  color: var(--muted);
}

.page__segments {
  list-style: none;
  padding: 0;
  margin: 0.4rem 0 0;
  display: grid;
  gap: 0;
  border-top: var(--hair) solid var(--line);
}

.page__segments li {
  font-size: 1.05rem;
  padding: 0.9rem 0;
  border-bottom: var(--hair) solid var(--line);
  line-height: 1.5;
}

.page__format {
  padding: 1.6rem var(--pad);
  margin: 0 calc(-1 * var(--pad));
  background: color-mix(in srgb, var(--night) 6%, var(--paper));
  display: grid;
  gap: 0.9rem;
  margin-bottom: 2rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  line-height: var(--lh-display);
  letter-spacing: -0.02em;
  margin: 0;
}

.page__offers {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.55rem;
}

.page__offers li {
  font-size: 1.05rem;
  padding-left: 1.1em;
  position: relative;
  line-height: 1.5;
}

.page__offers li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--joint);
}

.page__cta {
  display: grid;
  gap: 1.2rem;
}

.page__cta p {
  max-width: 36rem;
  color: var(--muted);
}
</style>
