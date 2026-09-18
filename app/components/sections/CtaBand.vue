<script setup lang="ts">
const props = defineProps<{
  title?: string
  text?: string
}>()

const { t } = useLocale()
</script>

<template>
  <section class="cta">
    <div class="cta__inner">
      <h2>{{ props.title || t('cta.title') }}</h2>
      <p>{{ props.text || t('cta.text') }}</p>
      <div class="cta__actions">
        <AppButton to="#contact" invert>{{ t('cta.consult') }}</AppButton>
        <AppButton to="#contact" variant="ghost" invert>{{ t('cta.price') }}</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: var(--section) var(--pad);
  background: var(--night);
  color: var(--paper);
}

.cta__inner {
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  max-width: 12ch;
}

p {
  max-width: 28rem;
  margin: 0.8rem 0 1.4rem;
  font-size: 1.1rem;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
</style>
