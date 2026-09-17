<script setup lang="ts">
import type { Project } from '~/types/content'

const props = defineProps<{
  project: Project
}>()

const { t } = useLocale()
const key = computed(() => `projects.items.${props.project.slug}`)
</script>

<template>
  <dl>
    <div><dt>{{ t('projects.meta.type') }}</dt><dd>{{ t(`${key}.typology`) }}</dd></div>
    <div><dt>{{ t('projects.meta.setting') }}</dt><dd>{{ t(`${key}.setting`) }}</dd></div>
    <div><dt>{{ t('projects.meta.system') }}</dt><dd>{{ t(`${key}.product`) }}</dd></div>
    <div><dt>{{ t('projects.meta.finish') }}</dt><dd>{{ t(`${key}.finish`) }}</dd></div>
    <div><dt>{{ t('projects.meta.size') }}</dt><dd>{{ t(`${key}.dimensions`) }}</dd></div>
    <div><dt>{{ t('projects.meta.status') }}</dt><dd>{{ t(`${key}.yearLabel`) }}</dd></div>
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
