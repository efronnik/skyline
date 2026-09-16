<script setup lang="ts">
const { el, visible } = useReveal()
</script>

<template>
  <section ref="el" class="phi" :class="{ 'is-in': visible }" aria-labelledby="phi-title">
    <SectionLabel kicker="Философия" spec="01 — Plane" />
    <div class="phi__grid">
      <div>
        <p class="phi__not">Не дверь.</p>
        <h2 id="phi-title">Продолжение архитектуры.</h2>
      </div>
      <div class="phi__text">
        <p>
          Скрытый монтаж убирает коробку, наличник и видимые петли.
          Полотно стоит заподлицо со стеной и может быть окрашено в тот же цвет.
        </p>
        <ul>
          <li>Плоскость стены и полотна совпадают</li>
          <li>Коробка спрятана в конструкции</li>
          <li>Петли не видны с фасада</li>
          <li>Зазор читается как шов, а не как рама</li>
        </ul>
      </div>
    </div>
    <div class="phi__visual">
      <MediaFrame
        src="/images/after-flush.png"
        alt="Стена с интегрированной скрытой дверью после отделки"
        ratio="16 / 8"
        sizes="100vw"
      />
      <p class="phi__cap">Стена → дверь → одна поверхность</p>
    </div>
  </section>
</template>

<style scoped>
.phi {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.phi__grid {
  display: grid;
  gap: var(--space-6);
  margin: var(--space-6) 0 var(--space-7);
}

.phi__not {
  font-family: var(--font-spec);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: var(--fs-xs);
  color: var(--joint);
  margin-bottom: 0.8rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.phi__text p {
  font-size: 1.25rem;
  max-width: var(--measure);
}

ul {
  margin: 1.4rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

li {
  font-family: var(--font-spec);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-left: 1.1rem;
  position: relative;
}

li::before {
  content: '';
  width: 8px;
  height: 1px;
  background: var(--joint);
  position: absolute;
  left: 0;
  top: 0.55em;
}

.phi__cap {
  margin-top: 0.8rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (min-width: 980px) {
  .phi__grid {
    grid-template-columns: 1.15fr 0.85fr;
    align-items: end;
  }
}
</style>
