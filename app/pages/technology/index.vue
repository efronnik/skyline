<script setup lang="ts">
import { technicalSteps } from '~/data/technical'

const active = ref(0)

usePageSeo({
  title: 'Технология скрытого монтажа',
  description: 'Скрытая коробка, невидимые петли, flush-полотно и точный монтаж дверей LIMEN.',
  path: '/technology',
  image: '/images/detail-hinge.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Технология" spec="Construction" />
      <h1>How it works.</h1>
      <p>Конструкция объясняется как архитектура, не как инструкция к фурнитуре.</p>
    </header>
    <div class="layout">
      <TechnicalDiagram :active="active" />
      <ol>
        <li v-for="(step, index) in technicalSteps" :key="step.id">
          <button type="button" :class="{ on: active === index }" @click="active = index">
            <span>{{ step.index }}</span>
            <strong>{{ step.title }}</strong>
            <p>{{ step.text }}</p>
          </button>
        </li>
      </ol>
    </div>
    <section>
      <h2>Монтаж</h2>
      <p>
        Качество скрытой двери определяется проёмом. Коробка ставится в стену, полотно регулируется,
        зазор проверяется по всей высоте, финиш выполняется вместе с поверхностью.
      </p>
      <ol class="steps">
        <li>Подготовка проёма</li>
        <li>Установка скрытой коробки</li>
        <li>Регулировка</li>
        <li>Навеска полотна</li>
        <li>Настройка петель</li>
        <li>Финальная проверка плоскости</li>
      </ol>
      <EmptyState
        title="Фото монтажа не загружены"
        text="Реальные кадры с объекта добавляются в public/images и в этот блок. Сейчас схема не подменяется стоковыми снимками."
      />
    </section>
    <CtaBand title="Разобрать узел на вашем объекте" />
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: var(--max);
  margin: 0 auto;
}

header,
section {
  max-width: 40rem;
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

.layout,
.steps {
  margin: var(--space-7) 0;
}

.layout ol,
.steps {
  list-style: none;
  padding: 0;
}

.layout button {
  width: 100%;
  border: 0;
  border-top: var(--hair) solid var(--line);
  background: none;
  text-align: left;
  padding: 1rem 0;
  cursor: pointer;
}

.layout span {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  color: var(--joint);
}

.layout strong {
  display: block;
  font-family: var(--font-display);
  font-size: 1.3rem;
  margin: 0.2rem 0;
}

.layout button.on strong {
  color: var(--joint);
}

.steps {
  display: grid;
  gap: 0.6rem;
  font-family: var(--font-spec);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (min-width: 900px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
    max-width: none;
  }

  header,
  section {
    max-width: none;
  }
}
</style>
