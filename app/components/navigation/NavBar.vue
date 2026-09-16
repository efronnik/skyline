<script setup lang="ts">
import { primaryNav } from '~/data/site'

const route = useRoute()
const menuOpen = ref(false)
const inverted = computed(() => Boolean(route.meta.darkHeader))
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="bar" :class="{ 'is-invert': inverted && !scrolled && !menuOpen, 'is-solid': scrolled || menuOpen }">
    <NuxtLink to="/" class="bar__brand" aria-label="LIMEN — на главную">
      <span class="bar__mark" aria-hidden="true" />
      <span>LIMEN</span>
    </NuxtLink>
    <nav class="bar__nav" aria-label="Основная навигация">
      <NuxtLink
        v-for="item in primaryNav"
        :key="item.to"
        :to="item.to"
        class="bar__link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <div class="bar__actions">
      <NuxtLink to="/contact" class="bar__link bar__cta-link">Заявка</NuxtLink>
      <button
        class="bar__burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">{{ menuOpen ? 'Закрыть меню' : 'Открыть меню' }}</span>
        <span aria-hidden="true">{{ menuOpen ? 'Close' : 'Menu' }}</span>
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
  gap: 1rem;
  min-height: var(--header);
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
  background: color-mix(in srgb, var(--paper) 94%, transparent);
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
  gap: 1rem;
  min-width: 0;
}

.bar__link {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  opacity: 0.72;
}

.bar__link:hover,
.bar__link.router-link-active {
  opacity: 1;
}

.bar__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-self: end;
}

.bar__cta-link {
  display: none;
  opacity: 1;
}

.bar__burger {
  min-width: 48px;
  min-height: 48px;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

@media (min-width: 1080px) {
  .bar__nav,
  .bar__cta-link {
    display: flex;
  }

  .bar__burger {
    display: none;
  }
}
</style>
