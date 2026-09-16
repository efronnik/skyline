<script setup lang="ts">
usePageSeo({
  title: 'Конфиденциальность',
  description: 'Политика конфиденциальности LIMEN — шаблон под юридическую редакцию.',
  path: '/privacy'
})
</script>

<template>
  <article class="page">
    <h1>Конфиденциальность</h1>
    <p>Это каркас политики, не юридический документ. Текст заменяется после правовой вычитки.</p>
    <p>Форма заявки передаёт указанные вами данные в service layer. В тестовом режиме они не отправляются в CRM и не сохраняются в базе.</p>
    <p>Файлы, приложенные к заявке, обрабатываются только для расчёта проекта.</p>
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
