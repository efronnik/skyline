<script setup lang="ts">
import { primaryNav } from '~/data/site'

const open = defineModel<boolean>({ default: false })
const panel = ref<HTMLElement | null>(null)
const route = useRoute()

useScrollLock(open)
useFocusTrap(panel, open)

watch(() => route.fullPath, () => {
  open.value = false
})

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<template>
  <div
    v-if="open"
    id="mobile-menu"
    ref="panel"
    class="menu"
    role="dialog"
    aria-modal="true"
    aria-label="Меню"
  >
    <div class="menu__top">
      <p class="menu__mark">LIMEN</p>
      <button class="menu__close" type="button" @click="open = false">
        Закрыть
      </button>
    </div>
    <nav class="menu__nav" aria-label="Мобильная навигация">
      <NuxtLink
        v-for="item in primaryNav"
        :key="item.to"
        :to="item.to"
        class="menu__link"
      >
        {{ item.label }}
      </NuxtLink>
      <NuxtLink to="/about" class="menu__link">О студии</NuxtLink>
    </nav>
    <div class="menu__cta">
      <AppButton to="/contact" invert>Получить консультацию</AppButton>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--night);
  color: var(--paper);
  padding: calc(var(--header) * 0.4) var(--pad) var(--pad);
}

.menu__top,
.menu__cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  gap: 0.4rem;
}

.menu__link {
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 3.4rem);
  line-height: 1.05;
  font-weight: 600;
}

.menu__link:hover,
.menu__link.router-link-active {
  color: var(--joint-bright);
}

.menu__cta {
  padding-top: 1rem;
  border-top: var(--hair) solid var(--line-on-night);
}
</style>
