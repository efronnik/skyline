<script setup lang="ts">
const { t } = useLocale()
const { el, style } = useParallax(56)
</script>

<template>
  <section id="philosophy" class="phi" aria-labelledby="phi-title">
    <SectionLabel :kicker="t('philosophy.kicker')" :spec="t('philosophy.spec')" />
    <div class="phi__grid">
      <div>
        <p class="phi__not">{{ t('philosophy.not') }}</p>
        <h2 id="phi-title">{{ t('philosophy.title') }}</h2>
      </div>
      <div class="phi__text">
        <p>{{ t('philosophy.text') }}</p>
      </div>
    </div>
    <div ref="el" class="phi__visual">
      <div class="phi__plane" :style="style">
        <MediaFrame
          src="/images/work-pair.jpg"
          :alt="t('philosophy.alt')"
          ratio="16 / 9"
          sizes="100vw"
          position="50% 58%"
        />
      </div>
    </div>
    <p class="phi__cap">{{ t('philosophy.cap') }}</p>
  </section>
</template>

<style scoped>
.phi {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.phi__grid {
  display: grid;
  gap: 1.4rem;
  margin: 1.4rem 0 1.6rem;
}

.phi__not {
  font-family: var(--font-spec);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: var(--fs-xs);
  color: var(--joint);
  margin-bottom: 0.6rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.phi__text p {
  font-size: 1.12rem;
  max-width: var(--measure);
}

.phi__visual {
  overflow: hidden;
}

.phi__plane {
  will-change: transform;
}

.phi__plane :deep(.media) {
  overflow: hidden;
}

.phi__plane :deep(.media__img) {
  transform: scale(1.12);
}

@media (prefers-reduced-motion: reduce) {
  .phi__plane {
    will-change: auto;
  }

  .phi__plane :deep(.media__img) {
    transform: none;
  }
}

.phi__cap {
  margin-top: 0.7rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

@media (min-width: 980px) {
  .phi__grid {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: end;
  }
}
</style>
