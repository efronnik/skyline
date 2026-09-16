<template>
  <section class="arch" aria-labelledby="arch-title">
    <div>
      <SectionLabel kicker="Для бюро" spec="07 — Practice" />
      <h2 id="arch-title">Для архитекторов и дизайнеров.</h2>
      <p>
        Узлы, размеры, BIM и образцы подключаются в этот раздел.
        Пока файлы не загружены, можно запросить комплект напрямую.
      </p>
    </div>
    <ul>
      <li>DWG / CAD — структура готова</li>
      <li>BIM-семейства — по запросу проекта</li>
      <li>Образцы отделки</li>
      <li>Консультация по узлу примыкания</li>
    </ul>
    <div class="arch__cta">
      <AppButton to="/architects">Скачать технические материалы</AppButton>
      <AppButton to="/contact" variant="ghost">Запросить консультацию</AppButton>
    </div>
  </section>
</template>

<style scoped>
.arch {
  margin: 0 var(--pad) var(--space-8);
  padding: var(--space-7) var(--pad);
  border: var(--hair) solid var(--line);
  display: grid;
  gap: var(--space-5);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  max-width: 14ch;
  margin: 1rem 0;
}

p,
li {
  max-width: var(--measure);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
  font-family: var(--font-spec);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.arch__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

@media (min-width: 900px) {
  .arch {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: end;
  }

  .arch__cta {
    grid-column: 1 / -1;
  }
}
</style>
