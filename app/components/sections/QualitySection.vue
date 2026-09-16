<script setup lang="ts">
import { qualityDetails } from '~/data/technical'
</script>

<template>
  <section class="qual" aria-labelledby="qual-title">
    <SectionLabel kicker="Детали" spec="09 — Precision" />
    <h2 id="qual-title">Luxury is in the details.</h2>
    <div class="qual__grid">
      <article v-for="item in qualityDetails" :key="item.title">
        <MediaFrame :src="item.image" :alt="item.title" ratio="3 / 4" sizes="(min-width: 800px) 30vw, 100vw" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.qual {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0 var(--space-6);
}

.qual__grid {
  display: grid;
  gap: var(--space-6);
}

h3 {
  font-family: var(--font-display);
  margin: 0.8rem 0 0.4rem;
}

@media (min-width: 800px) {
  .qual__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  article:nth-child(2) {
    margin-top: 2.5rem;
  }
}
</style>
