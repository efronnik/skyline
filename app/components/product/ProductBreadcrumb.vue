<script setup lang="ts">
import type { ProductKind } from '~/types/content'

const props = defineProps<{
  kind: ProductKind
}>()

const { t } = useLocale()
</script>

<template>
  <nav class="crumbs" :aria-label="t('pdp.home')">
    <ol>
      <li><NuxtLink to="/">{{ t('pdp.home') }}</NuxtLink></li>
      <li><NuxtLink to="/products">{{ t('pdp.catalog') }}</NuxtLink></li>
      <li><NuxtLink to="/products">{{ t('pdp.flush') }}</NuxtLink></li>
      <li aria-current="page">{{ t(`pdp.${props.kind}.crumb`) }}</li>
    </ol>
  </nav>
</template>

<style scoped>
.crumbs {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  min-width: 0;
  max-width: 100%;
}

ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
}

li {
  min-width: 0;
  overflow-wrap: anywhere;
}

li:not(:last-child)::after {
  content: '/';
  margin-left: 0.5rem;
  color: var(--line-strong);
}

a:hover {
  color: var(--ink);
}

li[aria-current='page'] {
  color: var(--ink);
}
</style>
