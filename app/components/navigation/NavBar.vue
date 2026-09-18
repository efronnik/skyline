<script setup lang="ts">
const { t } = useLocale()
const route = useRoute()
const { open } = useInquiryModal()
const quote = useQuoteList()
const menuOpen = ref(false)
const inverted = computed(() => Boolean(route.meta.darkHeader) && route.path === '/')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}

function openQuote() {
  menuOpen.value = false
  open({
    intent: 'quote',
    message: quote.message()
  })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="bar" :class="{ 'is-invert': inverted && !scrolled && !menuOpen, 'is-solid': scrolled || menuOpen || route.path !== '/' }">
    <NuxtLink to="/" class="bar__brand" :aria-label="t('brandAria')">
      <span class="bar__mark" aria-hidden="true" />
      <span>LIMEN</span>
    </NuxtLink>
    <div class="bar__actions">
      <div class="bar__lang">
        <LangSwitch />
      </div>
      <button
        v-if="quote.total.value"
        type="button"
        class="bar__quote"
        :aria-label="`${t('pdp.quoteAria')}: ${quote.total.value}`"
        @click="openQuote"
      >
        {{ t('pdp.quoteAria') }}
        <span>{{ quote.total.value }}</span>
      </button>
      <button
        class="bar__burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? t('menuClose') : t('menuOpen')"
        @click="menuOpen = !menuOpen"
      >
        {{ t('menuAria') }}
      </button>
    </div>
    <MobileMenu v-model="menuOpen" />
  </header>
</template>

<style scoped>
.bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  height: var(--header);
  padding: env(safe-area-inset-top, 0px) var(--pad) 0;
  border-bottom: var(--hair) solid var(--line);
  background: color-mix(in srgb, var(--paper) 92%, transparent);
  color: var(--ink);
  min-width: 0;
}

.bar.is-invert {
  background: transparent;
  border-bottom-color: var(--line-on-night);
  color: var(--paper);
}

.bar.is-solid {
  background-color: var(--paper);
  background-image: var(--grain);
  background-size: 180px 180px;
  color: var(--ink);
  border-bottom-color: var(--line);
}

.bar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 48px;
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.22em;
  font-size: 0.82rem;
}

.bar__mark {
  width: 1px;
  height: 1.4rem;
  background: currentColor;
}

.bar__actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
}

.bar__lang {
  color: var(--ink);
}

.bar__lang :deep(.lang) {
  background: color-mix(in srgb, var(--paper) 94%, transparent);
  border-color: color-mix(in srgb, var(--ink) 28%, transparent);
}

.bar__quote {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 48px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .bar__quote {
    font-size: 0;
    letter-spacing: 0;
    gap: 0;
  }

  .bar__quote span {
    font-size: 0.64rem;
    letter-spacing: 0.08em;
  }
}

.bar__quote span {
  min-width: 1.4rem;
  min-height: 1.4rem;
  padding: 0 0.28rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: var(--hair) solid currentColor;
}

.bar__burger {
  min-height: 48px;
  min-width: 48px;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
</style>
