<script setup lang="ts">
defineProps<{
  title?: string
  text?: string
}>()
</script>

<template>
  <section class="cta">
    <h2>{{ title || 'Обсудить проём.' }}</h2>
    <p>{{ text || 'Чертеж, фото стены или просто задача. Считаем систему под архитектуру, а не наоборот.' }}</p>
    <div>
      <AppButton to="/contact" invert>Получить консультацию</AppButton>
      <AppButton to="/contact" variant="ghost" invert>Запросить стоимость</AppButton>
    </div>
  </section>
</template>

<style scoped>
.cta {
  margin: 0 var(--pad) var(--space-8);
  padding: var(--space-8) var(--pad);
  background: var(--night);
  color: var(--paper);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 10ch;
}

p {
  max-width: 28rem;
  margin: 1rem 0 1.8rem;
  font-size: 1.2rem;
}

div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
</style>
