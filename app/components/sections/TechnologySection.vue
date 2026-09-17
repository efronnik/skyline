<script setup lang="ts">
import { animate } from 'animejs'
import { idoorsBuild, idoorsSizes, sizeLine } from '~/data/idoorsSpec'
import { technicalSteps } from '~/data/technical'

const { t } = useLocale()
const { swing } = useConfigurator()
const reduced = useReducedMotion()
const { play } = useAnimeJob()
const active = ref(0)
const framesRoot = ref<HTMLElement | null>(null)

const frames = [
  { id: 'out' as const, src: '/images/idoors-install-standard.jpg' },
  { id: 'in' as const, src: '/images/idoors-install-inside.jpg' }
]

watch(swing, async () => {
  await nextTick()
  if (reduced.value || !framesRoot.value) return
  const on = framesRoot.value.querySelector('.tech__frame.is-on .media')
  if (!on) return
  play(
    'tech-frame',
    animate(on, {
      opacity: [0.55, 1],
      scale: [0.97, 1],
      duration: 560,
      ease: 'outCubic'
    })
  )
})
</script>

<template>
  <section id="technology" class="tech" aria-labelledby="tech-title">
    <SectionLabel :kicker="t('technology.kicker')" :spec="t('technology.spec')" />
    <h2 id="tech-title">{{ t('technology.title') }}</h2>
    <p class="tech__lead">{{ t('technology.lead') }}</p>

    <dl class="tech__facts">
      <div>
        <dt>{{ t('technology.facts.leaf') }}</dt>
        <dd>{{ sizeLine(idoorsSizes[swing].leafH, idoorsSizes[swing].leafW) }}</dd>
      </div>
      <div>
        <dt>{{ t('technology.facts.opening') }}</dt>
        <dd>{{ sizeLine(idoorsSizes[swing].openingH, idoorsSizes[swing].openingW) }}</dd>
      </div>
      <div>
        <dt>{{ t('technology.facts.mdf') }}</dt>
        <dd>{{ swing === 'in' ? idoorsBuild.mdfIn : idoorsBuild.mdfOut }} {{ t('specs.mm') }}</dd>
      </div>
      <div>
        <dt>{{ t('technology.facts.fill') }}</dt>
        <dd>{{ t('technology.facts.fillValue') }}</dd>
      </div>
      <div>
        <dt>{{ t('technology.facts.sound') }}</dt>
        <dd>{{ idoorsBuild.soundDb }} {{ t('specs.dba') }}</dd>
      </div>
      <div>
        <dt>{{ t('technology.facts.cycles') }}</dt>
        <dd>{{ idoorsBuild.cycles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }}</dd>
      </div>
    </dl>

    <div ref="framesRoot" class="tech__frames">
      <button
        v-for="frame in frames"
        :key="frame.id"
        type="button"
        class="tech__frame"
        :class="{ 'is-on': swing === frame.id }"
        :aria-pressed="swing === frame.id"
        @click="swing = frame.id"
      >
        <MediaFrame
          :src="frame.src"
          :alt="t(`technology.frames.${frame.id}.alt`)"
          ratio="3 / 4"
          fit="contain"
          sizes="(min-width: 900px) 46vw, 100vw"
        />
        <span>
          <strong>{{ t(`technology.frames.${frame.id}.title`) }}</strong>
          <em>{{ t('technology.wall') }}</em>
        </span>
      </button>
    </div>

    <p class="tech__note">{{ t('technology.hProfile') }}</p>

    <div class="tech__layout">
      <TechnicalDiagram :active="active" />
      <div>
        <ol>
          <li v-for="(step, index) in technicalSteps" :key="step.id">
            <button type="button" :class="{ 'is-on': active === index }" @click="active = index">
              <span>{{ step.index }}</span>
              <strong>{{ t(`technology.steps.${step.id}.title`) }}</strong>
            </button>
          </li>
        </ol>
        <p class="tech__step">{{ t(`technology.steps.${technicalSteps[active].id}.text`) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  max-width: 16ch;
  margin: 0.8rem 0 0.7rem;
}

.tech__lead,
.tech__note {
  max-width: 40rem;
  color: var(--muted);
  margin: 0 0 1.4rem;
}

.tech__facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hair);
  margin: 0 0 1.6rem;
  padding: 0;
  background: var(--line);
  border: var(--hair) solid var(--line);
}

.tech__facts div {
  display: grid;
  gap: 0.25rem;
  margin: 0;
  padding: 0.75rem 0.85rem;
  background: var(--paper);
}

.tech__facts dt {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
}

.tech__facts dd {
  margin: 0;
  font-family: var(--font-spec);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.tech__note {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0.9rem 0 1.6rem;
}

.tech__frames {
  display: grid;
  gap: 0.8rem;
}

.tech__frame {
  display: grid;
  gap: 0.7rem;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  color: inherit;
}

.tech__frame :deep(.media) {
  background: #fff;
  border: var(--hair) solid var(--line);
  transition: border-color var(--duration-fast) var(--ease);
}

.tech__frame:hover :deep(.media),
.tech__frame.is-on :deep(.media) {
  border-color: var(--ink);
}

.tech__frame span {
  display: grid;
  gap: 0.15rem;
}

.tech__frame strong {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 600;
}

.tech__frame em {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-style: normal;
  color: var(--muted);
}

.tech__frame.is-on strong {
  color: var(--joint);
}

.tech__layout {
  display: grid;
  gap: 1.2rem;
}

.tech__layout ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.2rem;
}

.tech__step {
  margin: 1rem 0 0;
  max-width: 36rem;
  color: var(--muted);
}

.tech__layout button {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 0.7rem;
  padding: 0.85rem 0;
  border: 0;
  border-top: var(--hair) solid var(--line);
  background: none;
  text-align: left;
  cursor: pointer;
  color: inherit;
  transition: color var(--duration-fast) var(--ease);
}

.tech__layout button span {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.tech__layout button strong {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 600;
}

.tech__layout button.is-on strong {
  color: var(--joint);
}

@media (min-width: 900px) {
  .tech__facts {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .tech__frames {
    grid-template-columns: 1fr 1fr;
  }

  .tech__layout {
    display: grid;
    grid-template-columns: 0.72fr 1.28fr;
    gap: 1.6rem;
    align-items: start;
  }

  .tech__layout ol {
    grid-template-columns: 1fr 1fr;
    gap: 0 1.6rem;
  }
}
</style>
