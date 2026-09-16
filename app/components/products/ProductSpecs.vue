<script setup lang="ts">
import type { Product } from '~/types/content'

defineProps<{
  product: Product
}>()
</script>

<template>
  <dl class="specs">
    <div>
      <dt>Отделка</dt>
      <dd>{{ product.finishes.join(' · ') }}</dd>
    </div>
    <div>
      <dt>Открывание</dt>
      <dd>{{ product.openings.join(' · ') }}</dd>
    </div>
    <div>
      <dt>Высота</dt>
      <dd>{{ product.heights.join(' · ') }}</dd>
    </div>
    <div>
      <dt>Цвет</dt>
      <dd>{{ product.colors.map(item => item.name).join(' · ') }}</dd>
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
