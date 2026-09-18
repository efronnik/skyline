<script setup lang="ts">
import type { ExtraId, ProductKind } from '~/types/content'
import { extraIds, leafSizes } from '~/data/primeConfig'
import { heroImage } from '~/data/products'

const props = defineProps<{
  kind: ProductKind
  sku: string
}>()

const { t } = useLocale()
const { open: openQuote } = useInquiryModal()
const { open: openConsult } = useConsultModal()
const { finish, swing, edge, size, height, width, extras, summary, sizeError, clampCustomSize, validateCustomSize } = usePrimeConfig(props.kind)

const extrasList = computed(() => props.kind === 'base'
  ? extraIds
  : (['spinoff', 'dropSeal', 'sound', 'closer'] as ExtraId[]))

function extraKey(id: ExtraId) {
  return id === 'spinoff' && props.kind !== 'base'
    ? 'pdp.extras.spinoffFinish'
    : `pdp.extras.${id}`
}

const image = computed(() => heroImage({
  kind: props.kind,
  swing: swing.value,
  edge: edge.value,
  finish: props.kind === 'base' ? 'primer' : finish.value
}))

const customLink = computed(() => ({
  path: '/products/prime-custom',
  query: {
    swing: swing.value,
    edge: edge.value,
    ...(props.kind === 'finish' ? { finish: finish.value } : {})
  }
}))

function quote() {
  if (props.kind === 'custom' && !validateCustomSize()) return
  openQuote({
    intent: 'quote',
    message: `${t('pdp.quoteLead')}\n\n${summary.value}`
  })
}

function consult() {
  openConsult(`${t('pdp.quoteLead')}\n\n${summary.value}`)
}
</script>

<template>
  <div class="hero">
    <div class="hero__shot">
      <MediaFrame
        :src="image"
        :alt="t(`pdp.${kind}.title`)"
        ratio="3 / 4"
        fit="contain"
        sizes="(min-width: 980px) 42vw, 100vw"
      />
    </div>
    <div class="hero__copy">
      <p class="hero__sku">{{ t('pdp.sku') }} {{ sku }}</p>
      <h1>{{ t(`pdp.${kind}.title`) }}</h1>

      <form class="cfg" @submit.prevent="quote">
        <fieldset v-if="kind === 'finish'">
          <legend>{{ t('pdp.selector.finish') }}</legend>
          <label class="opt">
            <input v-model="finish" type="radio" name="finish" value="veneer">
            <span>{{ t('pdp.finishKind.veneer') }}</span>
          </label>
          <label class="opt">
            <input v-model="finish" type="radio" name="finish" value="mirror">
            <span>{{ t('pdp.finishKind.mirror') }}</span>
          </label>
        </fieldset>

        <fieldset v-if="kind === 'custom'">
          <legend>{{ t('pdp.selector.customFinish') }}</legend>
          <label class="opt">
            <input v-model="finish" type="radio" name="finish" value="primer">
            <span>{{ t('pdp.customFinish.primer') }}</span>
          </label>
          <label class="opt">
            <input v-model="finish" type="radio" name="finish" value="veneer">
            <span>{{ t('pdp.customFinish.veneer') }}</span>
          </label>
          <label class="opt">
            <input v-model="finish" type="radio" name="finish" value="mirror">
            <span>{{ t('pdp.customFinish.mirror') }}</span>
          </label>
        </fieldset>

        <fieldset v-if="kind === 'custom'">
          <legend>{{ t('pdp.selector.dims') }}</legend>
          <div class="dims">
            <label>
              {{ t('pdp.height') }}
              <input
                v-model.number="height"
                type="number"
                name="height"
                min="2001"
                max="2400"
                step="1"
                required
                @blur="clampCustomSize"
              >
            </label>
            <label>
              {{ t('pdp.width') }}
              <input
                v-model.number="width"
                type="number"
                name="width"
                min="500"
                max="1000"
                step="1"
                required
                @blur="clampCustomSize"
              >
            </label>
          </div>
          <p v-if="sizeError" class="cfg__err">{{ sizeError }}</p>
        </fieldset>

        <fieldset>
          <legend>{{ t('pdp.selector.swing') }}</legend>
          <label class="opt">
            <input v-model="swing" type="radio" name="swing" value="out">
            <span>{{ kind === 'base' ? t('pdp.swing.out') : t('pdp.swing.outFinish') }}</span>
          </label>
          <label class="opt">
            <input v-model="swing" type="radio" name="swing" value="in">
            <span>{{ t('pdp.swing.in') }}</span>
          </label>
        </fieldset>

        <fieldset v-if="kind !== 'custom'">
          <legend>{{ t('pdp.selector.size') }}</legend>
          <div class="chips">
            <label v-for="item in leafSizes" :key="item.id" class="chip">
              <input v-model="size" type="radio" name="size" :value="item.id">
              <span>{{ item.label }}</span>
            </label>
          </div>
          <NuxtLink class="cfg__link" :to="customLink">
            {{ t('pdp.customSize') }}
          </NuxtLink>
        </fieldset>

        <fieldset>
          <legend>{{ kind === 'finish' ? t('pdp.selector.edgeFinish') : t('pdp.selector.edge') }}</legend>
          <label class="opt">
            <input v-model="edge" type="radio" name="edge" value="silver">
            <span>{{ t('pdp.edge.silver') }}</span>
          </label>
          <label class="opt">
            <input v-model="edge" type="radio" name="edge" value="black">
            <span>{{ t('pdp.edge.black') }}</span>
          </label>
        </fieldset>

        <fieldset>
          <legend>{{ t('pdp.selector.extras') }}</legend>
          <label v-for="id in extrasList" :key="id" class="opt">
            <input v-model="extras[id]" type="checkbox">
            <span>{{ t(extraKey(id)) }}</span>
          </label>
        </fieldset>

        <p v-if="kind === 'finish'" class="hero__b2b">{{ t('pdp.b2b') }}</p>
        <p v-if="kind === 'custom'" class="hero__note">{{ t('pdp.priceNote') }}</p>
        <div class="hero__cta">
          <AppButton type="submit">{{ t('pdp.quote') }}</AppButton>
          <AppButton type="button" variant="line" @click="consult">{{ t('cta.consult') }}</AppButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 1.6rem;
  align-items: start;
}

.hero__shot {
  background: #eceae6;
  border: var(--hair) solid var(--line);
}

.hero__sku {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
  margin: 0;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.04em;
  max-width: 16em;
  margin: 0.45rem 0 1.1rem;
}

.cfg {
  display: grid;
  gap: 1.15rem;
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: 0.45rem;
}

legend {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 0;
  margin-bottom: 0.2rem;
}

.opt {
  display: grid;
  grid-template-columns: 1.1rem 1fr;
  gap: 0.65rem;
  align-items: start;
  font-size: 0.98rem;
}

.opt input {
  margin-top: 0.28rem;
  accent-color: var(--ink);
}

.dims {
  display: grid;
  gap: 0.8rem;
}

.dims label {
  display: grid;
  gap: 0.3rem;
  font-size: 0.9rem;
}

.dims input {
  min-height: 44px;
  padding: 0.45rem 0.1rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  font-size: 1rem;
}

.dims input:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

.cfg__err {
  margin: 0.2rem 0 0;
  color: var(--danger);
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
}

.cfg__link {
  justify-self: start;
  margin-top: 0.15rem;
  color: inherit;
  font-size: 0.98rem;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.chip {
  cursor: pointer;
}

.chip input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.chip span {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  padding: 0 0.85rem;
  border: var(--hair) solid var(--line-strong);
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.chip:has(input:checked) span,
.chip:has(input:focus-visible) span {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.hero__b2b {
  margin: 0.2rem 0 0;
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--joint);
}

.hero__note {
  margin: 0.2rem 0 0;
  color: var(--muted);
  max-width: 36rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.3rem;
}

@media (min-width: 980px) {
  .hero {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2.4rem;
  }

  .hero__shot {
    position: sticky;
    top: calc(var(--header) + 0.8rem);
  }

  .dims {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 1.4rem;
  }
}
</style>
