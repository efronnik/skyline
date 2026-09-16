<script setup lang="ts">
import { materials } from '~/data/materials'

const active = ref(materials[0]?.id ?? 'paint')
const current = computed(() => materials.find(item => item.id === active.value) ?? materials[0])

usePageSeo({
  title: 'Материалы и отделка',
  description: 'Окраска в цвет стены, минеральная штукатурка, шпон дуба и ореха, стекло для скрытых дверей LIMEN.',
  path: '/materials',
  image: '/images/material-plaster.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Материалы" spec="Finishes" />
      <h1>Материал важнее двери.</h1>
      <p>Выберите поверхность — превью показывает, как полотно садится в стену.</p>
    </header>
    <div v-if="current" class="stage">
      <MediaFrame :src="current.preview" :alt="current.name" ratio="16 / 9" sizes="100vw" />
      <aside>
        <p>{{ current.category }}</p>
        <h2>{{ current.name }}</h2>
        <p>{{ current.summary }}</p>
        <p>{{ current.notes }}</p>
      </aside>
    </div>
    <div class="grid">
      <button
        v-for="item in materials"
        :key="item.id"
        type="button"
        :aria-pressed="item.id === active"
        @click="active = item.id"
      >
        <MediaFrame :src="item.image" :alt="item.name" ratio="1 / 1" sizes="200px" />
        <span>{{ item.name }}</span>
      </button>
    </div>
    <EmptyState
      v-if="!materials.length"
      title="Материалы не загружены"
      text="Добавьте отделки в data/materials.ts."
    />
    <CtaBand title="Прислать образец стены" />
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: var(--max);
  margin: 0 auto;
}

header {
  max-width: 34rem;
  margin-bottom: var(--space-7);
}

h1,
h2 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h1 {
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0;
}

.stage {
  display: grid;
  gap: 1.2rem;
  margin-bottom: var(--space-6);
}

aside p:first-child {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-bottom: var(--space-8);
}

button {
  border: var(--hair) solid var(--line);
  background: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
}

button span {
  display: block;
  padding: 0.7rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

button[aria-pressed='true'] {
  border-color: var(--ink);
}

@media (min-width: 800px) {
  .stage {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: end;
  }

  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
