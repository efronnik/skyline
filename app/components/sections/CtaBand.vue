<script setup lang="ts">
const props = defineProps<{
  title?: string
  text?: string
}>()

const { t } = useLocale()
</script>

<template>
  <section class="cta">
    <h2>{{ props.title || t('cta.title') }}</h2>
    <p>{{ props.text || t('cta.text') }}</p>
    <div>
      <AppButton to="#contact" invert>{{ t('cta.consult') }}</AppButton>
      <AppButton to="#contact" variant="ghost" invert>{{ t('cta.price') }}</AppButton>
    </div>
  </section>
</template>

<style scoped>
.cta {
  margin: 0 var(--pad) var(--section);
  padding: var(--space-7) var(--pad);
  background: var(--night);
  color: var(--paper);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 12ch;
}

p {
  max-width: 28rem;
  margin: 0.8rem 0 1.4rem;
  font-size: 1.1rem;
}

div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
</style>
