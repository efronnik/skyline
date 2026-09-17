<script setup lang="ts">
import type { Product } from '~/types/content'

defineProps<{
  product: Product
}>()

const { t } = useLocale()
</script>

<template>
  <dl class="specs">
    <div>
      <dt>{{ t('specs.finish') }}</dt>
      <dd>{{ t('materials.items.paint.name') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.edge') }}</dt>
      <dd>{{ t(`config.edges.${product.edge}`) }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.opening') }}</dt>
      <dd>{{ t(`config.openings.${product.swing}`) }} · {{ t('config.openings.left') }} · {{ t('config.openings.right') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.threshold') }}</dt>
      <dd>{{ t('config.thresholds.yes') }} · {{ t('config.thresholds.no') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.height') }}</dt>
      <dd>{{ t('config.heights.standard') }} · {{ t('config.heights.ceiling') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.color') }}</dt>
      <dd>{{ t('config.colors.white') }} · {{ t('config.leafFinish') }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.specs {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

div {
  display: grid;
  gap: 0.3rem;
  padding-top: 0.8rem;
  border-top: var(--hair) solid var(--line);
}

dt {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (min-width: 700px) {
  .specs {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
