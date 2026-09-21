<script setup lang="ts">
import { animate, stagger } from 'animejs'
import { homeHeroShot } from '~/data/products'

const { t } = useLocale()
const reduced = useReducedMotion()
const copy = ref<HTMLElement | null>(null)
const { play } = useAnimeJob()
const { open: openQuote } = useInquiryModal()
const { open: openAsk } = useConsultModal()
const quote = useQuoteList()

function quoteOrder() {
  openQuote({
    intent: 'quote',
    message: quote.message()
  })
}

onMounted(async () => {
  await nextTick()
  if (reduced.value || !copy.value) return
  play(
    'hero',
    animate(copy.value.children, {
      opacity: [0, 1],
      y: [18, 0],
      delay: stagger(90),
      duration: 780,
      ease: 'outCubic'
    })
  )
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__visual">
      <MediaFrame
        :src="homeHeroShot"
        :alt="t('hero.alt')"
        ratio="16 / 9"
        fit="cover"
        position="78% 46%"
        priority
        sizes="100vw"
      />
      <span class="hero__ticks" aria-hidden="true" />
    </div>
    <div ref="copy" class="hero__copy">
      <p class="hero__kicker">{{ t('hero.title') }}</p>
      <h1 id="hero-title">{{ t('hero.slogan') }}</h1>
      <div class="hero__cta">
        <AppButton variant="ghost" invert @click="openAsk()">{{ t('hero.cta1') }}</AppButton>
        <AppButton invert @click="quoteOrder">{{ t('hero.cta2') }}</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: min(88svh, 820px);
  display: grid;
  background: var(--night);
  color: var(--paper);
  position: relative;
  overflow: hidden;
}

.hero__visual {
  position: absolute;
  inset: 0;
}

.hero__visual :deep(.media) {
  position: absolute;
  inset: 0;
  height: 100%;
  aspect-ratio: auto;
}

.hero__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(20,18,16,0.58) 0%, rgba(20,18,16,0.2) 26%, rgba(20,18,16,0.28) 52%, rgba(20,18,16,0.82) 100%);
}

.hero__ticks {
  position: absolute;
  inset: 1rem;
  z-index: 1;
  border: var(--hair) solid var(--line-on-night);
  pointer-events: none;
}

.hero__copy {
  position: relative;
  z-index: 2;
  align-self: end;
  padding: calc(var(--header) + 1.1rem) var(--pad) 1.6rem;
  max-width: min(40rem, calc(100% - 1.2rem));
}

.hero__kicker {
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.65;
  margin: 0 0 0.6rem;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 3.4vw, 3rem);
  font-weight: 700;
  line-height: var(--lh-display);
  letter-spacing: -0.03em;
  margin-bottom: 1.1rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

@media (min-width: 980px) {
  .hero__copy {
    padding-bottom: var(--space-8);
  }
}
</style>
