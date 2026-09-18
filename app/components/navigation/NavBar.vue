<script setup lang="ts">
import { primaryNav } from '~/data/site'

const { t } = useLocale()
const route = useRoute()
const menuOpen = ref(false)
const inverted = computed(() => Boolean(route.meta.darkHeader) && route.path === '/')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
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
    <nav class="bar__nav" :aria-label="t('navAria')">
      <NavLink
        v-for="item in primaryNav"
        :key="item.to"
        :to="item.to"
        class="bar__link"
      >
        {{ t(`nav.${item.label}`) }}
      </NavLink>
    </nav>
    <div class="bar__actions">
      <LangSwitch class="bar__lang" />
      <HashLink to="#contact" class="bar__link bar__cta-link">{{ t('nav.contact') }}</HashLink>
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
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  align-content: center;
  gap: 0.8rem;
  height: var(--header);
  padding: 0 var(--pad);
  border-bottom: var(--hair) solid var(--line);
  background: color-mix(in srgb, var(--paper) 92%, transparent);
  color: var(--ink);
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

.bar__nav {
  display: none;
  justify-content: center;
  gap: 0.15rem 0.85rem;
  min-width: 0;
}

.bar__link {
  font-family: var(--font-spec);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  opacity: 0.72;
  white-space: nowrap;
}

.bar__link:hover {
  opacity: 1;
}

.bar__actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-self: end;
}

.bar__cta-link {
  display: none;
  opacity: 1;
}

.bar__lang {
  display: none;
  margin-right: 0.2rem;
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

@media (min-width: 1180px) {
  .bar__nav,
  .bar__cta-link,
  .bar__lang {
    display: flex;
  }

  .bar__burger {
    display: none;
  }
}
</style>
