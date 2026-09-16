<script setup lang="ts">
import { technicalSteps } from '~/data/technical'

const active = ref(0)
</script>

<template>
  <section class="tech" aria-labelledby="tech-title">
    <SectionLabel kicker="Технология" spec="04 — How it works" />
    <h2 id="tech-title">Как собирается невидимость.</h2>
    <div class="tech__layout">
      <TechnicalDiagram :active="active" />
      <ol>
        <li v-for="(step, index) in technicalSteps" :key="step.id">
          <button type="button" :class="{ 'is-on': active === index }" @click="active = index">
            <span>{{ step.index }}</span>
            <strong>{{ step.title }}</strong>
            <em>{{ step.text }}</em>
          </button>
        </li>
      </ol>
    </div>
    <AppButton to="/technology" variant="line">Разбор конструкции</AppButton>
  </section>
</template>

<style scoped>
.tech {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 12ch;
  margin: 1rem 0 var(--space-6);
}

.tech__layout {
  display: grid;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

button {
  width: 100%;
  display: grid;
  gap: 0.25rem;
  padding: 0.9rem 0;
  border: 0;
  border-top: var(--hair) solid var(--line);
  background: none;
  text-align: left;
  cursor: pointer;
  color: inherit;
}

button span,
button em {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-style: normal;
  color: var(--muted);
}

button strong {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
}

button.is-on strong {
  color: var(--joint);
}

@media (min-width: 980px) {
  .tech__layout {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}
</style>
