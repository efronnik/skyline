<script setup lang="ts">
const { t } = useLocale()
const { edge, swing, selectedSlug } = useConfigurator()

const sides = ['left', 'right'] as const
const swings = ['in', 'out'] as const
const heights = ['standard', 'ceiling', 'custom'] as const
const edges = ['silver', 'black'] as const
const handlePositions = ['standard', 'high', 'custom'] as const
const thresholds = ['no', 'yes'] as const

const edgeTones = {
  silver: '#C5C2BA',
  black: '#1C1916'
} as const

const spec = reactive({
  side: 'left' as (typeof sides)[number],
  height: 'ceiling' as (typeof heights)[number],
  handlePos: 'standard' as (typeof handlePositions)[number],
  threshold: 'yes' as (typeof thresholds)[number]
})

const opened = ref(true)

function cycleHandle() {
  const index = handlePositions.indexOf(spec.handlePos)
  spec.handlePos = handlePositions[(index + 1) % handlePositions.length]
}

function toggleThreshold() {
  spec.threshold = spec.threshold === 'yes' ? 'no' : 'yes'
}
</script>

<template>
  <section id="configurator" class="cfg" aria-labelledby="cfg-title">
    <div class="cfg__head">
      <SectionLabel :kicker="t('config.kicker')" :spec="t('config.spec')" />
      <h2 id="cfg-title">{{ t('config.title') }}</h2>
      <p>{{ t('config.lead') }}</p>
    </div>

    <div class="room">
      <ClientOnly>
        <DoorStage
          :edge="edge"
          leaf="paint"
          :side="spec.side"
          :swing="swing"
          :handle-pos="spec.handlePos"
          :threshold="spec.threshold"
          :height="spec.height"
          :opened="opened"
          @leaf-click="opened = !opened"
          @handle-click="cycleHandle"
          @sill-click="toggleThreshold"
        />
        <template #fallback>
          <p class="room__hint">{{ t('config.loading') }}</p>
        </template>
      </ClientOnly>
      <div class="room__bar">
        <button type="button" class="open-btn" :aria-pressed="opened" @click="opened = !opened">
          {{ opened ? t('config.closeDoor') : t('config.openDoor') }}
        </button>
        <span class="room__hint">{{ t('config.clickDoor') }}</span>
      </div>
    </div>

    <form class="cfg__form" @submit.prevent>
      <p class="cfg__sum">
        {{ t(`products.${selectedSlug}.name`) }}
        · {{ t(`config.edges.${edge}`) }}
        · {{ t(`config.openings.${spec.side}`) }}
        · {{ t(`config.openings.${swing}`) }}
      </p>

      <fieldset class="seg">
        <legend>{{ t('config.edge') }}</legend>
        <div class="chips">
          <label
            v-for="item in edges"
            :key="item"
            class="chip"
            :class="{ 'is-on': edge === item }"
          >
            <input v-model="edge" class="sr" type="radio" name="cfg-edge" :value="item">
            <span class="chip__sw" :style="{ background: edgeTones[item] }" />
            <em>{{ t(`config.edges.${item}`) }}</em>
          </label>
        </div>
      </fieldset>

      <fieldset class="seg">
        <legend>{{ t('config.side') }}</legend>
        <div class="seg__row" :style="{ '--n': sides.length }">
          <label v-for="item in sides" :key="item" class="pill" :class="{ 'is-on': spec.side === item }">
            <input v-model="spec.side" class="sr" type="radio" name="cfg-side" :value="item">
            <span>{{ t(`config.openings.${item}`) }}</span>
          </label>
        </div>
      </fieldset>

      <fieldset class="seg">
        <legend>{{ t('config.swing') }}</legend>
        <div class="seg__row" :style="{ '--n': swings.length }">
          <label v-for="item in swings" :key="item" class="pill" :class="{ 'is-on': swing === item }">
            <input v-model="swing" class="sr" type="radio" name="cfg-swing" :value="item">
            <span>{{ t(`config.openings.${item}`) }}</span>
          </label>
        </div>
      </fieldset>

      <div class="cfg__pair">
        <fieldset class="seg">
          <legend>{{ t('config.handlePos') }}</legend>
          <div class="seg__row" :style="{ '--n': handlePositions.length }">
            <label v-for="item in handlePositions" :key="item" class="pill" :class="{ 'is-on': spec.handlePos === item }">
              <input v-model="spec.handlePos" class="sr" type="radio" name="cfg-handle" :value="item">
              <span>{{ t(`config.handlePositions.${item}`) }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset class="seg">
          <legend>{{ t('config.threshold') }}</legend>
          <div class="seg__row" :style="{ '--n': thresholds.length }">
            <label v-for="item in thresholds" :key="String(item)" class="pill" :class="{ 'is-on': spec.threshold === item }">
              <input v-model="spec.threshold" class="sr" type="radio" name="cfg-sill" :value="item">
              <span>{{ t(`config.thresholds.${item}`) }}</span>
            </label>
          </div>
        </fieldset>
      </div>

      <fieldset class="seg">
        <legend>{{ t('config.height') }}</legend>
        <div class="seg__row" :style="{ '--n': heights.length }">
          <label v-for="item in heights" :key="item" class="pill" :class="{ 'is-on': spec.height === item }">
            <input v-model="spec.height" class="sr" type="radio" name="cfg-height" :value="item">
            <span>{{ t(`config.heights.${item}`) }}</span>
          </label>
        </div>
      </fieldset>

      <AppButton to="#contact">{{ t('config.discuss') }}</AppButton>
    </form>
  </section>
</template>

<style scoped>
.cfg {
  display: grid;
  gap: 1.4rem;
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
}

.cfg__head p {
  max-width: 38rem;
  margin-top: 0.7rem;
  color: var(--muted);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: 0.95;
  margin: 0.7rem 0 0;
}

.room {
  position: relative;
  min-height: min(68vw, 520px);
  width: 100%;
  overflow: hidden;
  border: var(--hair) solid var(--line);
  background: #cfcabe;
}

.room__bar {
  position: absolute;
  z-index: 2;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.7rem 1rem;
  pointer-events: none;
}

.open-btn {
  pointer-events: auto;
  min-height: 40px;
  padding: 0.45rem 0.95rem;
  border: var(--hair) solid var(--ink);
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
}

.open-btn[aria-pressed='false'] {
  background: var(--paper);
  color: var(--ink);
}

.room__hint {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--ink) 68%, transparent);
}

.cfg__sum {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--joint);
}

.cfg__form {
  display: grid;
  gap: 1.05rem;
}

.cfg__pair {
  display: grid;
  gap: 1.05rem;
}

.seg {
  border: 0;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}

.seg legend {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--joint);
  padding: 0;
}

.chips {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hair);
  background: var(--line);
  border: var(--hair) solid var(--line);
}

.chip {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 52px;
  margin: 0;
  padding: 0.5rem 0.75rem;
  background: var(--paper);
  cursor: pointer;
}

.chip__sw {
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(20,18,16,0.22);
}

.chip em {
  font-family: var(--font-spec);
  font-size: 0.6rem;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.25;
  color: var(--ink-soft);
}

.chip.is-on {
  background: var(--ink);
}

.chip.is-on em {
  color: var(--paper);
}

.seg__row {
  display: grid;
  grid-template-columns: repeat(var(--n, 3), minmax(0, 1fr));
  gap: var(--hair);
  background: var(--line);
  border: var(--hair) solid var(--line);
}

.sr {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin: 0;
  padding: 0.45rem 0.55rem;
  background: var(--paper);
  cursor: pointer;
  color: var(--ink-soft);
  transition: background var(--duration-fast) var(--ease), color var(--duration-fast) var(--ease);
}

.pill span {
  position: relative;
  z-index: 0;
  font-family: var(--font-spec);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.25;
  text-wrap: balance;
}

.pill.is-on {
  background: var(--ink);
  color: var(--paper);
}

.pill:hover:not(.is-on),
.chip:hover:not(.is-on) {
  background: color-mix(in srgb, var(--ink) 6%, var(--paper));
}

.pill:focus-within,
.chip:focus-within,
.open-btn:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}

.cfg__form :deep(.btn) {
  width: 100%;
  margin-top: 0.2rem;
}

@media (min-width: 980px) {
  .cfg {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
    column-gap: 2rem;
  }

  .cfg__head {
    grid-column: 1 / -1;
  }

  .room {
    min-height: 560px;
    height: calc(100svh - var(--header) - 1.6rem);
    max-height: 720px;
    position: sticky;
    top: calc(var(--header) + 0.6rem);
  }

  .cfg__form {
    position: sticky;
    top: calc(var(--header) + 0.6rem);
  }

  .cfg__pair {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}
</style>
