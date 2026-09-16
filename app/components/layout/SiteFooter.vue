<script setup lang="ts">
import { contact, footerNav, primaryNav, site } from '~/data/site'
import { products } from '~/data/products'
</script>

<template>
  <footer class="foot">
    <div class="foot__grid">
      <div>
        <p class="foot__brand">{{ site.name }}</p>
        <p class="foot__tag">{{ site.tagline }}</p>
        <AppButton to="/contact">Рассчитать проект</AppButton>
      </div>
      <nav aria-label="Разделы">
        <p class="foot__h">Студия</p>
        <NuxtLink v-for="item in primaryNav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
        <NuxtLink to="/about">О студии</NuxtLink>
      </nav>
      <nav aria-label="Коллекция">
        <p class="foot__h">Коллекция</p>
        <NuxtLink v-for="item in products" :key="item.slug" :to="`/products/${item.slug}`">
          {{ item.name }}
        </NuxtLink>
      </nav>
      <div>
        <p class="foot__h">Контакт</p>
        <a v-if="contact.phone.href" :href="contact.phone.href">{{ contact.phone.value }}</a>
        <p v-else>{{ contact.city.value }}</p>
        <a v-if="contact.email.href" :href="contact.email.href">{{ contact.email.value }}</a>
        <a v-if="contact.mapUrl" :href="contact.mapUrl" rel="noreferrer" target="_blank">Как добраться</a>
        <p v-else class="foot__note">Адрес появится после заполнения карточки студии.</p>
      </div>
    </div>
    <div class="foot__base">
      <p>© {{ new Date().getFullYear() }} {{ site.legalName }}</p>
      <nav>
        <NuxtLink v-for="item in footerNav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  background: var(--night);
  color: var(--paper);
  padding: var(--space-8) var(--pad) var(--space-6);
}

.foot__grid {
  display: grid;
  gap: var(--space-7);
  max-width: var(--max);
  margin: 0 auto;
}

.foot__brand {
  font-family: var(--font-display);
  letter-spacing: 0.22em;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}

.foot__tag {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 1.4rem;
  max-width: 16rem;
}

.foot__h {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint-bright);
  margin-bottom: 0.8rem;
}

nav,
.foot__grid > div {
  display: grid;
  gap: 0.45rem;
  align-content: start;
}

.foot a,
.foot p {
  font-size: 0.95rem;
}

.foot a:hover {
  color: var(--joint-bright);
}

.foot__note {
  color: color-mix(in srgb, var(--paper) 55%, transparent);
  max-width: 16rem;
}

.foot__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  max-width: var(--max);
  margin: var(--space-8) auto 0;
  padding-top: 1.2rem;
  border-top: var(--hair) solid var(--line-on-night);
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.foot__base nav {
  display: flex;
  gap: 1rem;
}

@media (min-width: 900px) {
  .foot__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
  }
}
</style>
