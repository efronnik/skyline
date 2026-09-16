<script setup lang="ts">
const reduced = useReducedMotion()
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__visual">
      <NuxtImg
        src="/images/hero-wall.png"
        alt="Минеральная стена со скрытой дверью, читаемой только по вертикальному зазору"
        sizes="sm:100vw md:100vw lg:1920px"
        width="1920"
        height="1080"
        preload
        loading="eager"
        format="webp"
        class="hero__img"
      />
      <span class="hero__reveal" :class="{ 'is-live': !reduced }" aria-hidden="true" />
      <span class="hero__ticks" aria-hidden="true" />
    </div>
    <div class="hero__copy">
      <p class="hero__spec">Flush system · Hidden frame · Plane</p>
      <h1 id="hero-title">Стена продолжается.</h1>
      <p class="hero__lead">
        Дверь скрытого монтажа LIMEN стоит в одной плоскости со стеной.
        Не предмет интерьера — часть архитектуры.
      </p>
      <div class="hero__cta">
        <AppButton to="/contact" invert>Рассчитать проект</AppButton>
        <AppButton to="/products" variant="ghost" invert>Смотреть коллекцию</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  display: grid;
  background: var(--night);
  color: var(--paper);
  position: relative;
}

.hero__visual {
  position: absolute;
  inset: 0;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.78;
}

.hero__reveal {
  position: absolute;
  top: 12%;
  bottom: 12%;
  left: 62%;
  width: 1px;
  background: color-mix(in srgb, var(--paper) 70%, transparent);
  transform: scaleY(0);
  transform-origin: center;
}

.hero__reveal.is-live {
  animation: doorline 1.8s var(--ease) 0.3s forwards;
}

.hero__ticks {
  position: absolute;
  inset: var(--pad);
  border: var(--hair) solid var(--line-on-night);
  pointer-events: none;
}

.hero__copy {
  position: relative;
  z-index: 1;
  align-self: end;
  padding: calc(var(--header) + 1.4rem) var(--pad) 1.6rem;
  max-width: min(46rem, calc(100% - 2rem));
}

.hero__spec {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  color: color-mix(in srgb, var(--paper) 70%, transparent);
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-display);
  font-weight: 700;
  line-height: var(--lh-display);
  letter-spacing: -0.04em;
}

.hero__lead {
  margin: 1.4rem 0 2rem;
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 300;
  max-width: 28rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

@keyframes doorline {
  to { transform: scaleY(1); }
}

@media (min-width: 980px) {
  .hero__copy {
    padding-bottom: var(--space-8);
  }

  .hero__reveal {
    left: 70%;
  }
}
</style>
