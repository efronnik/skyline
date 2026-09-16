<script setup lang="ts">
import { processSteps } from '~/data/technical'
</script>

<template>
  <section class="proc" aria-labelledby="proc-title">
    <SectionLabel kicker="Процесс" spec="08 — Sequence" />
    <h2 id="proc-title">От разговора до плоскости.</h2>
    <ol>
      <li v-for="step in processSteps" :key="step.index">
        <span>{{ step.index }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.proc {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 1rem 0 var(--space-6);
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
  border-top: var(--hair) solid var(--line);
}

li {
  display: grid;
  gap: 0.4rem;
  padding: 1.2rem 0;
  border-bottom: var(--hair) solid var(--line);
}

span {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  color: var(--joint);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.4rem;
}

@media (min-width: 900px) {
  ol {
    grid-template-columns: repeat(6, 1fr);
    border-top: 0;
  }

  li {
    padding: 0 1rem 0 0;
    border-bottom: 0;
    border-right: var(--hair) solid var(--line);
  }

  li:last-child {
    border-right: 0;
  }
}
</style>
