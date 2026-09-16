<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section class="proj" aria-labelledby="proj-title">
    <div class="proj__head">
      <SectionLabel kicker="Сценарии" spec="06 — Spaces" />
      <h2 id="proj-title">Дверь в пространстве, не в каталоге.</h2>
      <p>
        Ниже — архитектурные типологии, а не портфолио объектов.
        Реальные реализации подключаются в том же формате.
      </p>
    </div>
    <article v-for="(item, index) in projects" :key="item.slug" class="proj__row" :class="`is-${index}`">
      <NuxtLink :to="`/projects/${item.slug}`">
        <MediaFrame
          :src="item.cover"
          :alt="`${item.title}: ${item.typology}`"
          :ratio="index % 2 === 0 ? '16 / 9' : '4 / 5'"
          sizes="(min-width: 900px) 70vw, 100vw"
        />
        <div>
          <p>{{ item.typology }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.story }}</p>
          <span>Открыть сценарий</span>
        </div>
      </NuxtLink>
    </article>
    <AppButton to="/projects" variant="line">Все сценарии</AppButton>
  </section>
</template>

<style scoped>
.proj {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.proj__head {
  max-width: 36rem;
  margin-bottom: var(--space-7);
}

h2,
h3 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h2 {
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0;
}

.proj__row a {
  display: grid;
  gap: 1rem;
  margin-bottom: var(--space-7);
}

.proj__row p:first-of-type,
.proj__row span {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint);
}

h3 {
  font-size: var(--fs-lg);
  margin: 0.35rem 0 0.6rem;
}

@media (min-width: 900px) {
  .proj__row a {
    grid-template-columns: 1.3fr 0.7fr;
    align-items: end;
  }

  .proj__row.is-1 a,
  .proj__row.is-3 a {
    grid-template-columns: 0.8fr 1.2fr;
  }

  .proj__row.is-1 a > :first-child,
  .proj__row.is-3 a > :first-child {
    order: 2;
  }
}
</style>
