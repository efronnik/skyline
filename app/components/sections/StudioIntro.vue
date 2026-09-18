<script setup lang="ts">
const { t, ta } = useLocale()
</script>

<template>
  <section id="studio" class="studio" aria-labelledby="studio-title">
    <SectionLabel :kicker="t('studio.kicker')" :spec="t('studio.spec')" />
    <div class="studio__grid">
      <h2 id="studio-title">{{ t('studio.title') }}</h2>
      <div class="studio__copy">
        <p v-for="item in ta('studio.paragraphs')" :key="item">{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.studio {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
  min-width: 0;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.03em;
  max-width: 8.2em;
  margin: 0.8rem 0 0;
  overflow-wrap: break-word;
}

.studio__copy {
  display: grid;
  gap: 0.9rem;
  margin-top: 1.2rem;
  max-width: 42rem;
}

.studio__copy p {
  margin: 0;
  font-size: 1.12rem;
}
</style>
