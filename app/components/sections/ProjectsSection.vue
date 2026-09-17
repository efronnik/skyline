<script setup lang="ts">
import { animate } from 'animejs'
import { projects } from '~/data/projects'

const { t } = useLocale()
const reduced = useReducedMotion()
const { play } = useAnimeJob()
const active = ref(projects[0]?.slug ?? 'anfilade')
const current = computed(() => projects.find(item => item.slug === active.value) ?? projects[0])
const stage = ref<HTMLElement | null>(null)

function indexOf(slug: string) {
  return String(projects.findIndex(item => item.slug === slug) + 1).padStart(2, '0')
}

watch(active, async () => {
  await nextTick()
  if (reduced.value || !stage.value) return
  const img = stage.value.querySelector('.proj__frame .media__img')
  const copy = stage.value.querySelector('.proj__copy')
  if (img)
    play(
      'proj-img',
      animate(img, {
        opacity: [0, 1],
        scale: [1.04, 1],
        duration: 740,
        ease: 'outCubic'
      })
    )
  if (copy)
    play(
      'proj-copy',
      animate(copy, {
        opacity: [0, 1],
        y: [14, 0],
        duration: 580,
        ease: 'outCubic'
      })
    )
})
</script>

<template>
  <section id="projects" class="proj" aria-labelledby="proj-title">
    <div class="proj__head">
      <SectionLabel :kicker="t('projects.kicker')" :spec="t('projects.spec')" />
      <h2 id="proj-title">{{ t('projects.title') }}</h2>
      <p>{{ t('projects.lead') }}</p>
    </div>

    <div v-if="current" ref="stage" class="proj__stage">
      <div class="proj__frame">
        <MediaFrame
          :key="current.slug"
          :src="current.cover"
          :alt="t(`projects.items.${current.slug}.title`)"
          ratio="4 / 5"
          sizes="(min-width: 980px) 58vw, 100vw"
        />
        <span class="proj__badge">{{ indexOf(current.slug) }}</span>
      </div>

      <div class="proj__copy">
        <p class="proj__type">{{ t(`projects.items.${current.slug}.typology`) }}</p>
        <h3>{{ t(`projects.items.${current.slug}.title`) }}</h3>
        <p class="proj__story">{{ t(`projects.items.${current.slug}.story`) }}</p>
        <NuxtLink class="proj__more" :to="`/projects/${current.slug}`">{{ t('projects.open') }}</NuxtLink>
        <dl>
          <div>
            <dt>{{ t('projects.meta.system') }}</dt>
            <dd>{{ t(`projects.items.${current.slug}.product`) }}</dd>
          </div>
          <div>
            <dt>{{ t('projects.meta.finish') }}</dt>
            <dd>{{ t(`projects.items.${current.slug}.finish`) }}</dd>
          </div>
          <div>
            <dt>{{ t('projects.meta.size') }}</dt>
            <dd>{{ t(`projects.items.${current.slug}.dimensions`) }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="proj__rail" role="list">
      <button
        v-for="(item, index) in projects"
        :key="item.slug"
        type="button"
        class="card"
        :class="{ 'is-on': item.slug === active }"
        :aria-pressed="item.slug === active"
        @click="active = item.slug"
      >
        <span class="card__shot">
          <img :src="item.cover" alt="" width="320" height="240">
        </span>
        <span class="card__meta">
          <em>{{ String(index + 1).padStart(2, '0') }}</em>
          <strong>{{ t(`projects.items.${item.slug}.title`) }}</strong>
          <small>{{ t(`projects.items.${item.slug}.typology`) }}</small>
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.proj {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.proj__head {
  display: grid;
  gap: 0.7rem;
  max-width: 36rem;
  margin-bottom: 1.4rem;
}

.proj__head p {
  color: var(--muted);
}

h2,
h3 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h2 {
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  margin: 0;
}

.proj__stage {
  display: grid;
  gap: 1.15rem;
}

.proj__frame {
  position: relative;
  border: var(--hair) solid var(--line);
}

.proj__badge {
  position: absolute;
  left: 0.8rem;
  top: 0.8rem;
  z-index: 1;
  padding: 0.28rem 0.5rem;
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
}

.proj__type {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

h3 {
  font-size: var(--fs-lg);
  line-height: 1;
  margin: 0.35rem 0 0.7rem;
}

.proj__story {
  max-width: 34rem;
  color: var(--muted);
}

.proj__more {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 0.4rem;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

dl {
  display: grid;
  gap: 0;
  margin: 1rem 0 0;
}

dl div {
  display: grid;
  gap: 0.2rem;
  padding: 0.7rem 0;
  border-top: var(--hair) solid var(--line);
}

dt {
  font-family: var(--font-spec);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

dd {
  margin: 0;
  font-size: 0.95rem;
}

.proj__rail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hair);
  margin-top: 1.15rem;
  background: var(--line);
  border: var(--hair) solid var(--line);
}

.card {
  display: grid;
  gap: 0;
  padding: 0;
  border: 0;
  background: var(--paper);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.card__shot {
  display: block;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--stone);
}

.card__shot img {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  transition: transform var(--duration) var(--ease), filter var(--duration-fast) var(--ease);
}

.card__meta {
  display: grid;
  gap: 0.18rem;
  padding: 0.7rem 0.75rem 0.8rem;
}

.card em,
.card small {
  font-family: var(--font-spec);
  font-size: 0.58rem;
  font-style: normal;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint);
}

.card strong {
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.card:hover .card__shot img,
.card.is-on .card__shot img {
  transform: scale(1.03);
}

.card.is-on {
  background: var(--ink);
  color: var(--paper);
}

.card.is-on em,
.card.is-on small {
  color: color-mix(in srgb, var(--paper) 62%, transparent);
}

.card:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

@media (min-width: 1100px) {
  .proj__rail {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 980px) {
  .proj__stage {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: end;
    column-gap: 1.8rem;
  }

  h3 {
    font-size: clamp(1.45rem, 2vw, 1.9rem);
  }
}
</style>
