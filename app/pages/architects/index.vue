<script setup lang="ts">
usePageSeo({
  title: 'Архитекторам и дизайнерам',
  description: 'Технические материалы, узлы, образцы и консультации LIMEN для архитектурных бюро.',
  path: '/architects',
  image: '/images/project-gallery.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Практика" spec="For architects" />
      <h1>Чертежи, узлы, образцы.</h1>
      <p>
        Раздел готов к файлам DWG, BIM и PDF. Пока документы не подключены,
        комплект запрашивается формой — без имитации скачивания.
      </p>
    </header>
    <ul>
      <li>
        <h2>DWG / CAD</h2>
        <p>Структура каталога public/downloads готова. Файлы появятся здесь после загрузки.</p>
      </li>
      <li>
        <h2>BIM</h2>
        <p>Семейства под конкретный узел — по запросу проекта, без вымышленных библиотек.</p>
      </li>
      <li>
        <h2>Образцы</h2>
        <p>Шпон, грунт, стекло. Выезд с образцами согласовывается отдельно.</p>
      </li>
      <li>
        <h2>Custom</h2>
        <p>Нестандартная высота, створки, цвет стены, скрытое раздвижение.</p>
      </li>
    </ul>
    <EmptyState
      title="Технические файлы ещё не загружены"
      text="Положите PDF или DWG в public/downloads и добавьте ссылки в data-слой. Сейчас доступен запрос комплекта."
    >
      <AppButton to="/contact">Запросить консультацию</AppButton>
    </EmptyState>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: var(--max);
  margin: 0 auto;
}

header {
  max-width: 36rem;
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

ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
  margin: 0 0 var(--space-7);
}

li {
  border-top: var(--hair) solid var(--line);
  padding-top: 1rem;
}

@media (min-width: 800px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
