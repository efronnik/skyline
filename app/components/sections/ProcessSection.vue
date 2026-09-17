<script setup lang="ts">
import { processIndexes } from '~/data/technical'

const { t, tl } = useLocale()

const steps = computed(() =>
  tl<{ title: string, text: string }>('process.steps').map((step, index) => ({
    ...step,
    index: processIndexes[index] ?? String(index + 1).padStart(2, '0')
  }))
)
</script>

<template>
  <section id="process" class="proc" aria-labelledby="proc-title">
    <SectionLabel :kicker="t('process.kicker')" :spec="t('process.spec')" />
    <h2 id="proc-title">{{ t('process.title') }}</h2>
    <ol>
      <li v-for="step in steps" :key="step.index">
        <span>{{ step.index }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.proc {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 0.8rem 0 1.4rem;
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
  gap: 0.35rem;
  padding: 1.15rem 0;
  border-bottom: var(--hair) solid var(--line);
}

span {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 2.4vw, 2.2rem);
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--joint);
}

h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
}

p {
  font-size: 0.95rem;
  color: var(--muted);
}

@media (min-width: 900px) {
  ol {
    grid-template-columns: repeat(6, 1fr);
    border-top: 0;
  }

  li {
    padding: 0 1.15rem;
    border-bottom: 0;
    border-right: var(--hair) solid var(--line);
  }

  li:first-child {
    padding-left: 0;
  }

  li:last-child {
    border-right: 0;
    padding-right: 0;
  }
}
</style>
