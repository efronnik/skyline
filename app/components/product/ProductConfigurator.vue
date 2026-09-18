<script setup lang="ts">
import type { ExtraId, ProductKind } from '~/types/content'
import { extraIds, leafSizes } from '~/data/primeConfig'
import { heroImage, optionShots } from '~/data/products'

const props = withDefaults(defineProps<{
  kind: ProductKind
  sku: string
  gallery?: string[]
}>(), {
  gallery: () => []
})

const { t } = useLocale()
const { open: openQuote } = useInquiryModal()
const { open: openConsult } = useConsultModal()
const quote = useQuoteList()
const { finish, swing, edge, size, height, width, extras, summary, sizeError, clampCustomSize, validateCustomSize } = usePrimeConfig(props.kind)
const selected = ref(0)
const qty = ref(1)
const added = ref(false)
let addedTimer: ReturnType<typeof setTimeout> | undefined

const extrasList = computed(() => props.kind === 'base'
  ? extraIds
  : (['spinoff', 'dropSeal', 'sound', 'closer'] as ExtraId[]))

function extraKey(id: ExtraId) {
  return id === 'spinoff' && props.kind !== 'base'
    ? 'pdp.extras.spinoffFinish'
    : `pdp.extras.${id}`
}

const shots = computed(() => {
  const unique = [...new Set(props.gallery.filter(Boolean))]
  if (unique.length) return unique
  return [heroImage({
    kind: props.kind,
    swing: swing.value,
    edge: edge.value,
    finish: props.kind === 'base' ? 'primer' : finish.value
  })]
})

const dropSealPhoto = computed(() => optionShots.dropSeal || '')
const showDropSeal = computed(() => extras.dropSeal)

const image = computed(() => {
  if (showDropSeal.value && dropSealPhoto.value)
    return dropSealPhoto.value
  return shots.value[selected.value] ?? shots.value[0] ?? ''
})

function pickShot(finishKind: 'primer' | 'veneer' | 'mirror') {
  const list = shots.value
  if (finishKind === 'mirror') {
    const index = list.findIndex(src => src.includes('product-glass') || src.includes('project-bedroom'))
    selected.value = index >= 0 ? index : selected.value
    return
  }
  if (finishKind === 'veneer') {
    const index = list.findIndex(src => src.includes('interior-dark') || src.includes('living-oak'))
    selected.value = index >= 0 ? index : selected.value
    return
  }
  selected.value = 0
}

watch(finish, (value) => {
  if (props.kind === 'base') return
  pickShot(value)
})
watch(shots, () => {
  if (selected.value >= shots.value.length) selected.value = 0
})

const customLink = computed(() => ({
  path: '/products/prime-custom',
  query: {
    swing: swing.value,
    edge: edge.value,
    ...(props.kind === 'finish' ? { finish: finish.value } : {})
  }
}))

function currentLine() {
  return {
    kind: props.kind,
    sku: props.sku,
    summary: summary.value,
    qty: qty.value
  }
}

function addLine() {
  if (props.kind === 'custom' && !validateCustomSize()) return false
  quote.add(currentLine())
  added.value = true
  if (addedTimer) clearTimeout(addedTimer)
  addedTimer = setTimeout(() => {
    added.value = false
  }, 1800)
  return true
}

function hasCurrent() {
  return quote.lines.value.some(item => item.kind === props.kind && item.summary === summary.value)
}

function quoteNow() {
  const ready = props.kind !== 'custom' || validateCustomSize()
  if (ready && (!quote.total.value || !hasCurrent()))
    quote.add(currentLine())
  else if (!ready && !quote.total.value)
    return
  openQuote({
    intent: 'quote',
    message: quote.message()
  })
}

function consult() {
  const ready = props.kind !== 'custom' || validateCustomSize()
  if (ready && (!quote.total.value || !hasCurrent()))
    quote.add(currentLine())
  openConsult(quote.message() || `${t('pdp.quoteLead')}\n\n${summary.value}`)
}

onUnmounted(() => {
  if (addedTimer) clearTimeout(addedTimer)
})
</script>

<template>
  <div class="hero">
    <div class="hero__stage">
      <div
        class="hero__shot"
        :class="{ 'is-drop': showDropSeal && !dropSealPhoto }"
      >
        <MediaFrame
          :src="image"
          :alt="showDropSeal ? t('pdp.extras.dropSeal') : t(`pdp.${kind}.title`)"
          ratio="3 / 4"
          fit="cover"
          :position="showDropSeal && !dropSealPhoto ? 'center bottom' : 'center'"
          sizes="(min-width: 980px) 42vw, 100vw"
        />
        <aside v-if="showDropSeal" class="hero__drop" aria-live="polite">
          <svg viewBox="0 0 160 72" fill="none" aria-hidden="true">
            <path d="M8 18 H152" stroke="currentColor" stroke-opacity=".28" />
            <rect x="28" y="8" width="104" height="22" stroke="currentColor" stroke-width="1.4" />
            <path d="M46 30 V46" stroke="currentColor" />
            <path d="M114 30 V46" stroke="currentColor" />
            <rect x="44" y="46" width="72" height="6" fill="currentColor" />
            <path d="M8 62 H152" stroke="currentColor" />
          </svg>
          <p>
            <strong>{{ t('specs.threshold') }}</strong>
            {{ t('pdp.dropSealNote') }}
          </p>
        </aside>
      </div>
      <div v-if="shots.length > 1" class="hero__gallery" :aria-label="t('pdp.galleryAria')">
        <p class="hero__gallery-title">{{ t('pdp.gallery') }}</p>
        <div class="hero__thumbs">
          <button
            v-for="(src, index) in shots"
            :key="src"
            type="button"
            class="hero__thumb"
            :aria-current="index === selected ? 'true' : undefined"
            :aria-label="`${index + 1}`"
            @click="selected = index"
          >
            <img :src="src" alt="" width="72" height="96">
          </button>
        </div>
      </div>
    </div>
    <div class="hero__copy">
      <p class="hero__sku">{{ t('pdp.sku') }} {{ sku }}</p>
      <h1>{{ t(`pdp.${kind}.title`) }}</h1>

      <form class="cfg" @submit.prevent="quoteNow">
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

        <fieldset>
          <legend>{{ t('pdp.qty') }}</legend>
          <label class="qty">
            <input
              v-model.number="qty"
              type="number"
              name="qty"
              min="1"
              :max="quote.maxQty"
              step="1"
              required
              @blur="qty = quote.clampQty(qty)"
            >
            <span>{{ t('pdp.pcs') }}</span>
          </label>
        </fieldset>

        <p v-if="kind === 'finish'" class="hero__b2b">{{ t('pdp.b2b') }}</p>
        <p v-if="kind === 'custom'" class="hero__note">{{ t('pdp.priceNote') }}</p>
        <div class="hero__cta">
          <AppButton type="button" variant="line" @click="addLine">{{ t('pdp.addLine') }}</AppButton>
          <AppButton type="submit">{{ t('pdp.quote') }}</AppButton>
          <AppButton type="button" variant="line" @click="consult">{{ t('cta.consult') }}</AppButton>
        </div>
        <p v-if="added" class="hero__added" role="status">{{ t('pdp.added') }}</p>
      </form>
      <QuoteList compact />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 1.6rem;
  align-items: start;
  min-width: 0;
  max-width: 100%;
}

.hero__stage {
  display: grid;
  gap: 0.7rem;
}

.hero__shot {
  background: #eceae6;
  border: var(--hair) solid var(--line);
  position: relative;
  overflow: hidden;
}

.hero__shot.is-drop :deep(.media__img) {
  transform: scale(1.22);
  transform-origin: 50% 82%;
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero__shot:not(.is-drop) :deep(.media__img) {
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero__drop {
  position: absolute;
  left: 0.7rem;
  right: 0.7rem;
  bottom: 0.7rem;
  display: grid;
  grid-template-columns: 5.4rem 1fr;
  gap: 0.7rem;
  align-items: center;
  padding: 0.65rem 0.75rem;
  background: color-mix(in srgb, var(--paper) 92%, transparent);
  border: var(--hair) solid var(--line-strong);
  color: var(--ink);
}

.hero__drop svg {
  display: block;
  width: 100%;
  height: auto;
}

.hero__drop p {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.35;
}

.hero__drop strong {
  display: block;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.hero__gallery-title {
  margin: 0;
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero__gallery {
  min-width: 0;
  max-width: 100%;
}

.hero__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(4.4rem, 100%), 1fr));
  gap: 0.4rem;
  min-width: 0;
  max-width: 100%;
}

.hero__thumb {
  width: auto;
  aspect-ratio: 3 / 4;
  height: auto;
  padding: 0;
  border: var(--hair) solid var(--line-strong);
  background: #eceae6;
  cursor: pointer;
}

.hero__thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__thumb[aria-current='true'] {
  border-color: var(--ink);
  outline: 1px solid var(--ink);
}

@media (prefers-reduced-motion: reduce) {
  .hero__shot.is-drop :deep(.media__img),
  .hero__shot:not(.is-drop) :deep(.media__img) {
    transition: none;
  }
}

.hero__sku {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
  margin: 0;
}

.hero__copy {
  min-width: 0;
  max-width: 100%;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.04em;
  max-width: min(16em, 100%);
  overflow-wrap: break-word;
  margin: 0.45rem 0 1.1rem;
}

.cfg {
  display: grid;
  gap: 1.15rem;
  min-width: 0;
  max-width: 100%;
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
  max-width: 100%;
}

.hero__cta :deep(.btn) {
  max-width: 100%;
}

.qty {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 12rem;
}

.qty input {
  width: 4.8rem;
  min-height: 44px;
  padding: 0.45rem 0.1rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  font-size: 1rem;
}

.qty input:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

.hero__added {
  margin: 0;
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ok);
}

.hero__copy :deep(.list) {
  margin-top: 1.4rem;
}

@media (max-width: 979px) {
  .hero__gallery {
    margin: 0.7rem 0 0;
  }

  .hero__shot :deep(.media) {
    aspect-ratio: 16 / 10;
  }

  .hero__shot.is-drop :deep(.media__img) {
    transform: none;
  }

  .hero__drop {
    grid-template-columns: 1fr;
    padding: 0.45rem 0.55rem;
    gap: 0;
  }

  .hero__drop svg {
    display: none;
  }

  .hero__drop p {
    font-size: 0.75rem;
  }

  .hero__gallery-title {
    display: none;
  }
}

@media (min-width: 980px) {
  .hero {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2.4rem;
  }

  .dims {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 1.4rem;
  }
}
</style>
