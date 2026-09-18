<script setup lang="ts">
import { primaryNav } from '~/data/site'

const { t } = useLocale()
const open = defineModel<boolean>({ default: false })
const panel = ref<HTMLElement | null>(null)
const route = useRoute()
const { open: openInquiry } = useInquiryModal()
const { open: openAsk } = useConsultModal()
const quote = useQuoteList()

useScrollLock(open)
useFocusTrap(panel, open)

watch(() => route.fullPath, () => {
  open.value = false
})

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

function close() {
  open.value = false
}

function openQuote() {
  close()
  openInquiry({
    intent: 'quote',
    message: quote.message()
  })
}

function openAskForm() {
  close()
  openAsk()
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<template>
  <div id="mobile-menu">
    <div
      v-if="open"
      ref="panel"
      class="menu"
      role="dialog"
      aria-modal="true"
      :aria-label="t('menuAria')"
    >
    <div class="menu__top">
      <p class="menu__mark">LIMEN</p>
      <button class="menu__close" type="button" @click="close">
        {{ t('menuClose') }}
      </button>
    </div>
    <nav class="menu__nav" :aria-label="t('navAria')">
      <NavLink
        v-for="item in primaryNav"
        :key="item.to"
        :to="item.to"
        class="menu__link"
        @click="close"
      >
        {{ t(`nav.${item.label}`) }}
      </NavLink>
      <NavLink to="/partners" class="menu__link" @click="close">
        {{ t('nav.partners') }}
      </NavLink>
      <button type="button" class="menu__link" @click="openQuote">
        {{ t('nav.quote') }}
      </button>
      <button
        v-if="quote.total.value"
        type="button"
        class="menu__link"
        @click="openQuote"
      >
        {{ t('pdp.quoteAria') }} · {{ quote.total.value }}
      </button>
    </nav>
    <div class="menu__cta">
      <LangSwitch />
      <button type="button" class="menu__request" @click="openAskForm">
        {{ t('cta.ask') }}
      </button>
    </div>
    </div>
  </div>
</template>

<style scoped>
#mobile-menu {
  display: contents;
}

.menu {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--night);
  color: var(--paper);
  padding: calc(env(safe-area-inset-top, 0px) + 0.8rem) var(--pad) var(--pad);
}

.menu__top,
.menu__cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.menu__mark,
.menu__close {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.menu__close {
  min-height: 48px;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
}

.menu__nav {
  display: grid;
  align-content: center;
  gap: 0.25rem;
}

.menu__link {
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 3.2rem);
  line-height: 1.05;
  font-weight: 600;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
  width: 100%;
}

.menu__link:hover {
  color: var(--joint-bright);
}

.menu__request {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
}

.menu__cta {
  padding-top: 1rem;
  border-top: var(--hair) solid var(--line-on-night);
}
</style>
