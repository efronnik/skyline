<script setup lang="ts">
import type { Project } from '~/types/content'

defineProps<{
  project: Project
}>()
</script>

<template>
  <dl>
    <div><dt>Тип</dt><dd>{{ project.typology }}</dd></div>
    <div><dt>Контекст</dt><dd>{{ project.setting }}</dd></div>
    <div><dt>Система</dt><dd>{{ project.product }}</dd></div>
    <div><dt>Отделка</dt><dd>{{ project.finish }}</dd></div>
    <div><dt>Размеры</dt><dd>{{ project.dimensions }}</dd></div>
    <div><dt>Статус</dt><dd>{{ project.yearLabel }}</dd></div>
  </dl>
</template>

<style scoped>
dl {
  display: grid;
  gap: 1rem;
}

div {
  display: grid;
  gap: 0.25rem;
  border-top: var(--hair) solid var(--line);
  padding-top: 0.7rem;
}

dt {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (min-width: 700px) {
  dl {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
