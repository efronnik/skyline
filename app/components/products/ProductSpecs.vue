<script setup lang="ts">
import type { Product } from '~/types/content'
import { idoorsBuild, idoorsSizes, sizeLine } from '~/data/idoorsSpec'

const props = defineProps<{
  product: Product
}>()

const { t } = useLocale()
const size = computed(() => idoorsSizes[props.product.swing])
const mdf = computed(() => (props.product.swing === 'in' ? idoorsBuild.mdfIn : idoorsBuild.mdfOut))
</script>

<template>
  <dl class="specs">
    <div>
      <dt>{{ t('specs.finish') }}</dt>
      <dd>{{ t('specs.leafFinish') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.edge') }}</dt>
      <dd>{{ t(`specs.edges.${product.edge}`) }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.opening') }}</dt>
      <dd>{{ t(`specs.openings.${product.swing}`) }} · {{ t('specs.openings.left') }} · {{ t('specs.openings.right') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.leafSize') }}</dt>
      <dd>{{ sizeLine(size.leafH, size.leafW) }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.openingSize') }}</dt>
      <dd>{{ sizeLine(size.openingH, size.openingW) }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.mdf') }}</dt>
      <dd>{{ mdf }} {{ t('specs.mm') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.fill') }}</dt>
      <dd>{{ t('specs.fillValue') }}</dd>
    </div>
    <div>
      <dt>{{ t('specs.sound') }}</dt>
      <dd>{{ idoorsBuild.soundDb }} {{ t('specs.dba') }} · {{ idoorsBuild.cycles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} {{ t('specs.cycles') }}</dd>
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
