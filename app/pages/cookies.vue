<script setup lang="ts">
usePageSeo({
  title: 'Cookies',
  description: 'Политика cookies LIMEN — шаблон под юридическую редакцию.',
  path: '/cookies'
})
</script>

<template>
  <article class="page">
    <h1>Cookies</h1>
    <p>Сайт не подключает рекламные трекеры. Технические cookies появятся здесь после выбора аналитики.</p>
    <p>Пока сторонние счётчики не установлены, отдельное согласие не запрашивается.</p>
  </article>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: 40rem;
  margin: 0 auto;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  margin-bottom: 1rem;
}

p + p {
  margin-top: 1rem;
}
</style>
