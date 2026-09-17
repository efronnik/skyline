<script setup lang="ts">
const { t, ta } = useLocale()
</script>

<template>
  <section id="architects" class="arch" aria-labelledby="arch-title">
    <div>
      <SectionLabel :kicker="t('architects.kicker')" :spec="t('architects.spec')" />
      <h2 id="arch-title">{{ t('architects.title') }}</h2>
      <p>{{ t('architects.text') }}</p>
    </div>
    <ul>
      <li v-for="item in ta('architects.points')" :key="item">{{ item }}</li>
    </ul>
    <div class="arch__cta">
      <AppButton to="#contact">{{ t('architects.cta') }}</AppButton>
    </div>
  </section>
</template>

<style scoped>
.arch {
  width: calc(100% - 2 * var(--pad));
  max-width: var(--max);
  margin: 0 auto var(--section);
  padding: 1.6rem var(--pad);
  border: var(--hair) solid var(--line);
  display: grid;
  gap: 1.1rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 16ch;
  margin: 0.7rem 0;
}

p,
li {
  max-width: var(--measure);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.4rem;
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.arch__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

@media (min-width: 900px) {
  .arch {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: end;
  }

  .arch__cta {
    grid-column: 1 / -1;
  }
}
</style>
