<script setup lang="ts">
import { materials } from '~/data/materials'

const active = ref(materials[0]?.id ?? 'paint')
const current = computed(() => materials.find(item => item.id === active.value) ?? materials[0])
</script>

<template>
  <section class="mat" aria-labelledby="mat-title">
    <div class="mat__intro">
      <SectionLabel kicker="Материалы" spec="03 — Surface" />
      <h2 id="mat-title">Сначала поверхность, потом проём.</h2>
    </div>
    <div class="mat__stage">
      <MediaFrame
        v-if="current"
        :src="current.preview"
        :alt="`Дверь в отделке: ${current.name}`"
        ratio="16 / 10"
        sizes="(min-width: 980px) 60vw, 100vw"
      />
      <div v-if="current" class="mat__copy">
        <p class="mat__cat">{{ current.category }}</p>
        <h3>{{ current.name }}</h3>
        <p>{{ current.summary }}</p>
        <p class="mat__note">{{ current.notes }}</p>
      </div>
    </div>
    <div class="mat__swatches" role="list">
      <button
        v-for="item in materials"
        :key="item.id"
        type="button"
        class="swatch"
        :class="{ 'is-on': item.id === active }"
        :aria-pressed="item.id === active"
        @click="active = item.id"
      >
        <img :src="item.image" :alt="''" width="72" height="72">
        <span>{{ item.name }}</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.mat {
  padding: var(--space-8) var(--pad);
  background: var(--night);
  color: var(--paper);
}

.mat__intro,
.mat__stage,
.mat__swatches {
  max-width: var(--max);
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 14ch;
  margin-top: 1rem;
}

.mat__stage {
  display: grid;
  gap: var(--space-5);
  margin: var(--space-6) 0;
}

.mat__cat,
.mat__note {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint-bright);
}

h3 {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  margin: 0.4rem 0 0.8rem;
}

.mat__note {
  margin-top: 1rem;
  max-width: 28rem;
}

.mat__swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.swatch {
  display: grid;
  grid-template-columns: 72px 1fr;
  align-items: center;
  gap: 0.8rem;
  min-height: 72px;
  padding: 0;
  border: var(--hair) solid var(--line-on-night);
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.swatch img {
  width: 72px;
  height: 72px;
  object-fit: cover;
}

.swatch span {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.swatch.is-on,
.swatch:hover {
  border-color: var(--paper);
}

@media (min-width: 800px) {
  .mat__swatches {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 980px) {
  .mat__stage {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: end;
  }
}
</style>
