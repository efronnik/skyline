<script setup lang="ts">
usePageSeo({
  title: 'О студии',
  description: 'LIMEN — архитектурные двери скрытого монтажа. Полотно в плоскости стены.',
  path: '/about',
  image: '/images/hero-wall.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Студия" spec="About" />
      <h1>LIMEN — порог, которого нет.</h1>
      <p>
        Название от латинского limen: порог. Мы работаем с дверями, которые не должны
        собирать на себе взгляд. История компании, годы и цифры появятся здесь, когда будут подтверждены.
      </p>
    </header>
    <section>
      <h2>Для кого</h2>
      <p>Архитекторы, дизайнеры интерьеров, частные заказчики, застройщики — если дверь является частью стены, а не мебелью проёма.</p>
    </section>
    <section>
      <h2>Как устроен продукт</h2>
      <p>Скрытая коробка, скрытые петли, flush-полотно, отделка вместе со стеной. Производство и монтаж описываются без вымышленных мощностей.</p>
    </section>
    <EmptyState
      title="Показатели не опубликованы"
      text="Блок с годами, объектами и географией подключается из data-слоя. На сайте нет выдуманных 15+ лет и 2000+ дверей."
    />
    <CtaBand />
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
  max-width: 44rem;
  margin: 0 auto;
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

section {
  margin: var(--space-6) 0;
}

p {
  font-size: 1.15rem;
}
</style>
