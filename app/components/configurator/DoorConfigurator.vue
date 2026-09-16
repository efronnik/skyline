<script setup lang="ts">
import { materials } from '~/data/materials'
import { products } from '~/data/products'

const types = [
  { id: 'single', label: 'Одностворчатая' },
  { id: 'double', label: 'Двустворчатая' },
  { id: 'sliding', label: 'Раздвижная' }
] as const

const openings = [
  { id: 'left', label: 'Левое' },
  { id: 'right', label: 'Правое' },
  { id: 'in', label: 'Внутрь' },
  { id: 'out', label: 'Наружу' }
] as const

const heights = [
  { id: 'standard', label: 'Стандарт' },
  { id: 'ceiling', label: 'До потолка' },
  { id: 'custom', label: 'По проекту' }
] as const

const handles = [
  { id: 'linear', label: 'Линейная' },
  { id: 'hidden', label: 'Скрытая' },
  { id: 'none', label: 'Без ручки' }
] as const

const colors = [
  { id: 'chalk', label: 'Мел', value: '#E8E4DC' },
  { id: 'mineral', label: 'Минерал', value: '#C9C4BB' },
  { id: 'ink', label: 'Чернила', value: '#1C1916' },
  { id: 'custom', label: 'По образцу', value: '#55605A' }
] as const

const spec = reactive({
  type: 'single',
  opening: 'left',
  height: 'ceiling',
  finish: materials[0]?.id ?? 'paint',
  color: 'mineral',
  handle: 'linear'
})

const finish = computed(() => materials.find(item => item.id === spec.finish) ?? materials[0])
const color = computed(() => colors.find(item => item.id === spec.color) ?? colors[1])
const matchedProduct = computed(() => {
  if (spec.type === 'sliding') return products.find(item => item.slug === 'pocket')
  if (spec.type === 'double') return products.find(item => item.slug === 'pair')
  if (spec.finish === 'glass') return products.find(item => item.slug === 'lumen')
  if (spec.finish === 'oak' || spec.finish === 'walnut') return products.find(item => item.slug === 'timber')
  return products.find(item => item.slug === 'plane')
})

const query = computed(() => ({
  product: matchedProduct.value?.name ?? 'Plane',
  finish: finish.value?.name ?? '',
  comment: `Тип: ${spec.type}; открывание: ${spec.opening}; высота: ${spec.height}; цвет: ${spec.color}; ручка: ${spec.handle}`
}))
</script>

<template>
  <section class="cfg" aria-labelledby="cfg-title">
    <div>
      <SectionLabel kicker="Конфигуратор" spec="Spec" />
      <h2 id="cfg-title">Собрать систему.</h2>
      <p>Цены не симулируются. Спецификация уходит в заявку как постановка задачи.</p>
    </div>

    <div class="cfg__preview" :style="{ '--leaf': color.value }">
      <div class="wall">
        <div class="leaf" :class="[`is-${spec.type}`, `is-${spec.height}`]">
          <img v-if="finish" :src="finish.image" alt="">
          <span v-if="spec.handle === 'linear'" class="handle" />
        </div>
      </div>
      <p>{{ finish?.name }} · {{ color.label }} · {{ spec.height }}</p>
    </div>

    <form class="cfg__form" @submit.prevent>
      <fieldset v-for="group in [
        { legend: 'Тип', key: 'type', items: types },
        { legend: 'Открывание', key: 'opening', items: openings },
        { legend: 'Высота', key: 'height', items: heights },
        { legend: 'Ручка', key: 'handle', items: handles }
      ]" :key="group.key">
        <legend>{{ group.legend }}</legend>
        <label v-for="item in group.items" :key="item.id">
          <input v-model="(spec as Record<string, string>)[group.key]" type="radio" :value="item.id">
          {{ item.label }}
        </label>
      </fieldset>

      <fieldset>
        <legend>Отделка</legend>
        <label v-for="item in materials" :key="item.id">
          <input v-model="spec.finish" type="radio" :value="item.id">
          {{ item.name }}
        </label>
      </fieldset>

      <fieldset>
        <legend>Цвет</legend>
        <label v-for="item in colors" :key="item.id">
          <input v-model="spec.color" type="radio" :value="item.id">
          {{ item.label }}
        </label>
      </fieldset>
    </form>

    <AppButton :to="{ path: '/contact', query }">Обсудить это решение</AppButton>
  </section>
</template>

<style scoped>
.cfg {
  display: grid;
  gap: var(--space-6);
  padding: var(--space-7) 0;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 0.8rem 0;
}

.cfg__preview {
  border: var(--hair) solid var(--line);
  padding: 1rem;
}

.wall {
  height: min(52vw, 380px);
  background: var(--stone);
  position: relative;
  overflow: hidden;
}

.leaf {
  position: absolute;
  top: 8%;
  bottom: 8%;
  left: 58%;
  width: 22%;
  background: var(--leaf);
  box-shadow: inset 1px 0 0 rgba(20, 18, 16, 0.35);
}

.leaf img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.78;
}

.leaf.is-double {
  width: 34%;
  box-shadow: inset 1px 0 0 rgba(20,18,16,.35), inset -1px 0 0 rgba(20,18,16,.2);
}

.leaf.is-sliding {
  left: 48%;
  width: 18%;
}

.leaf.is-ceiling {
  top: 0;
}

.handle {
  position: absolute;
  right: 12%;
  top: 46%;
  width: 2px;
  height: 18%;
  background: var(--ink);
}

.cfg__form {
  display: grid;
  gap: 1rem;
}

fieldset {
  border: 0;
  border-top: var(--hair) solid var(--line);
  padding: 0.8rem 0 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

legend {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
  padding: 0 0.6rem 0 0;
}

label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  min-height: 44px;
  cursor: pointer;
  font-size: 0.95rem;
}

@media (min-width: 980px) {
  .cfg {
    grid-template-columns: 0.9fr 1.1fr;
  }

  .cfg__form,
  a.btn {
    grid-column: 1 / -1;
  }
}
</style>
