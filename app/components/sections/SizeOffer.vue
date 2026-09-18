<script setup lang="ts">
const { t, ta } = useLocale()
const swing = ref<'in' | 'out'>('out')
</script>

<template>
  <OfferBlock
    id="size"
    image="right"
    :kicker="t('size.kicker')"
    :spec="t('size.spec')"
    :title="t('size.title')"
  >
    <DoorUnitDiagram :swing="swing" mode="unit" />
    <div class="seg" role="group" :aria-label="t('specs.opening')">
      <button type="button" :class="{ 'is-on': swing === 'out' }" @click="swing = 'out'">
        {{ t('specs.openings.out') }}
      </button>
      <button type="button" :class="{ 'is-on': swing === 'in' }" @click="swing = 'in'">
        {{ t('specs.openings.in') }}
      </button>
    </div>
    <template #body>
      <p class="lead">{{ t('architects.text') }}</p>
      <ul>
        <li v-for="item in ta('architects.points')" :key="item">{{ item }}</li>
      </ul>
      <div class="actions">
        <AppButton to="/architects">{{ t('cta.more') }}</AppButton>
        <AppButton to="#contact" variant="ghost">{{ t('architects.cta') }}</AppButton>
      </div>
    </template>
  </OfferBlock>
</template>

<style scoped>
.seg {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hair);
  margin-top: 0.75rem;
  padding: var(--hair);
  border: var(--hair) solid var(--line);
  background: var(--line);
}

.seg button {
  min-height: 44px;
  padding: 0 0.6rem;
  border: 0;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.seg button.is-on {
  color: var(--ink);
}

.lead {
  margin: 0 0 1.1rem;
  font-size: 1.12rem;
  max-width: 36rem;
}

ul {
  display: grid;
  gap: 0.4rem;
  margin: 0 0 1.2rem;
  padding: 0;
  list-style: none;
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
</style>
