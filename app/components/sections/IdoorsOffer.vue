<script setup lang="ts">
const { t, ta } = useLocale()
const swing = ref<'in' | 'out'>('out')
</script>

<template>
  <OfferBlock
    id="idoors"
    image="right"
    :kicker="t('collection.kicker')"
    :spec="t('collection.spec')"
    :title="t('seo.homeTitle')"
  >
    <DoorUnitDiagram :swing="swing" mode="leaf" />
    <div class="seg" role="group" :aria-label="t('specs.opening')">
      <button type="button" :class="{ 'is-on': swing === 'out' }" @click="swing = 'out'">
        {{ t('specs.openings.out') }}
      </button>
      <button type="button" :class="{ 'is-on': swing === 'in' }" @click="swing = 'in'">
        {{ t('specs.openings.in') }}
      </button>
    </div>
    <template #body>
      <p class="lead">{{ t('products.prime-al.summary') }}</p>
      <dl>
        <div>
          <dt>{{ t('specs.finish') }}</dt>
          <dd>{{ t('collection.facts.leaf') }}</dd>
        </div>
        <div>
          <dt>{{ t('specs.edge') }}</dt>
          <dd>{{ t('collection.facts.frame') }}</dd>
        </div>
        <div>
          <dt>{{ t('specs.opening') }}</dt>
          <dd>{{ t('collection.facts.swing') }}</dd>
        </div>
      </dl>
      <ul>
        <li v-for="item in ta('products.prime-al.features').slice(0, 4)" :key="item">{{ item }}</li>
      </ul>
      <AppButton to="#collection">{{ t('cta.more') }}</AppButton>
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

dl {
  display: grid;
  gap: var(--hair);
  margin: 0 0 1rem;
  padding: 0;
  background: var(--line);
  border: var(--hair) solid var(--line);
}

dl div {
  display: grid;
  gap: 0.2rem;
  margin: 0;
  padding: 0.7rem 0.8rem;
  background: var(--paper);
}

dt {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

dd {
  margin: 0;
}

ul {
  display: grid;
  gap: 0.35rem;
  margin: 0 0 1.2rem;
  padding: 0;
  list-style: none;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
