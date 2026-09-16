<template>
  <section class="bespoke" aria-labelledby="bespoke-title">
    <p>Custom</p>
    <h2 id="bespoke-title">Made to fit the architecture.</h2>
    <p class="bespoke__lead">
      Не интерьер подстраивается под дверь. Дверь принимает высоту, ширину, цвет и сценарий проёма.
    </p>
    <ul>
      <li>Нестандартная высота</li>
      <li>Ширина и число створок</li>
      <li>Цвет стены</li>
      <li>Материал по образцу</li>
    </ul>
  </section>
</template>

<style scoped>
.bespoke {
  padding: var(--space-8) var(--pad);
  background: var(--ink);
  color: var(--paper);
}

p:first-child {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--joint-bright);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.92;
  max-width: 12ch;
  margin: 0.8rem 0 1.2rem;
}

.bespoke__lead {
  font-size: 1.3rem;
  max-width: 28rem;
  font-weight: 300;
}

ul {
  margin: 2rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.6rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
</style>
