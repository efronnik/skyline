<script setup lang="ts">
import { animate, stagger } from 'animejs'

const { t } = useLocale()
const reduced = useReducedMotion()
const copy = ref<HTMLElement | null>(null)
const hero = ref<HTMLElement | null>(null)
const { play } = useAnimeJob()

function silence(event: Event) {
  const video = event.currentTarget as HTMLVideoElement
  video.muted = true
  video.defaultMuted = true
  video.volume = 0
}

function videoNode() {
  const node = hero.value?.querySelector('video')
  return node instanceof HTMLVideoElement ? node : null
}

onMounted(async () => {
  await nextTick()
  if (!reduced.value && copy.value) {
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
  }

  if (reduced.value || !hero.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      const video = videoNode()
      if (!video) return
      if (entry?.isIntersecting) void video.play()
      else video.pause()
    },
    { threshold: 0.2 }
  )
  observer.observe(hero.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section ref="hero" class="hero" aria-labelledby="hero-title">
    <div class="hero__visual">
      <img
        src="/images/hero-poster.jpg"
        :alt="t('hero.alt')"
        width="1600"
        height="900"
        class="hero__img"
      >
      <ClientOnly>
        <video
          v-if="!reduced"
          class="hero__video"
          autoplay
          muted
          loop
          playsinline
          disablepictureinpicture
          disableremoteplayback
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
          @loadedmetadata="silence"
          @play="silence"
          @volumechange="silence"
        >
          <source src="/videos/hero.mp4" type="video/mp4">
        </video>
      </ClientOnly>
      <span class="hero__ticks" aria-hidden="true" />
    </div>
    <div ref="copy" class="hero__copy">
      <p class="hero__spec">{{ t('hero.spec') }}</p>
      <h1 id="hero-title">{{ t('hero.title') }}</h1>
      <p class="hero__lead">{{ t('hero.lead') }}</p>
      <div class="hero__cta">
        <AppButton to="#configurator" invert>{{ t('hero.cta1') }}</AppButton>
        <AppButton to="#contact" variant="ghost" invert>{{ t('hero.cta2') }}</AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: min(88svh, 760px);
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

.hero__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(20,18,16,0.34) 0%, rgba(20,18,16,0.5) 42%, rgba(20,18,16,0.82) 100%);
}

.hero__img,
.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center;
}

.hero__img {
  animation: hero-drift 36s ease-in-out infinite alternate;
}

.hero__video {
  pointer-events: none;
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
  padding: calc(var(--header) + 1.1rem) var(--pad) 1.4rem;
  max-width: min(40rem, calc(100% - 1.2rem));
}

.hero__spec {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 0.9rem;
  color: color-mix(in srgb, var(--paper) 70%, transparent);
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 5.2rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.hero__lead {
  margin: 1rem 0 1.4rem;
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
  font-weight: 300;
  max-width: 28rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

@media (min-width: 980px) {
  .hero__copy {
    padding-bottom: var(--space-7);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__video {
    display: none;
  }

  .hero__img {
    animation: none;
  }
}

@keyframes hero-drift {
  from { transform: scale(1); }
  to { transform: scale(1.06); }
}
</style>
