<script setup lang="ts">
import { contact } from '~/data/site'

usePageSeo({
  title: 'Консультация и расчёт',
  description: 'Заявка на двери скрытого монтажа LIMEN: консультация, расчёт проекта, обсуждение узла.',
  path: '/contact',
  image: '/images/interior-flush.png'
})
</script>

<template>
  <div class="page">
    <header>
      <SectionLabel kicker="Контакт" spec="Request" />
      <h1>Получить консультацию.</h1>
      <p>Форма уходит в service layer. Пока CRM не подключена, отправка работает в тестовом режиме — без имитации «письма менеджеру».</p>
    </header>
    <div class="grid">
      <ConsultationForm />
      <aside>
        <p v-if="contact.phone.href"><a :href="contact.phone.href">{{ contact.phone.value }}</a></p>
        <p v-else>Телефон появится в app/data/site.ts</p>
        <p v-if="contact.email.href"><a :href="contact.email.href">{{ contact.email.value }}</a></p>
        <p>{{ contact.city.value }}</p>
        <p v-if="contact.mapUrl">
          <a :href="contact.mapUrl" rel="noreferrer" target="_blank">Как добраться</a>
        </p>
        <p v-else>Карта подключается вместе с адресом.</p>
      </aside>
    </div>
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

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0;
}

.grid {
  display: grid;
  gap: var(--space-7);
}

aside {
  border-top: var(--hair) solid var(--line);
  padding-top: 1rem;
  font-family: var(--font-spec);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: grid;
  gap: 0.7rem;
  align-content: start;
}

@media (min-width: 980px) {
  .grid {
    grid-template-columns: 1.4fr 0.6fr;
  }
}
</style>
