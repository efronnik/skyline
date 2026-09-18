<script setup lang="ts">
const { locale, locales, setLocale, t } = useLocale()
</script>

<template>
  <div class="lang" role="group" :aria-label="t('langAria')">
    <button
      v-for="item in locales"
      :key="item.id"
      type="button"
      class="lang__btn"
      :class="{ 'is-on': locale === item.id }"
      :aria-pressed="locale === item.id"
      @click="setLocale(item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
.lang {
  display: inline-flex;
  align-items: stretch;
  flex-shrink: 0;
  border: var(--hair) solid color-mix(in srgb, currentColor 45%, transparent);
}

.lang__btn {
  min-height: 2.2rem;
  min-width: 2.2rem;
  padding: 0 0.42rem;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.48;
}

.lang__btn.is-on,
.lang__btn:hover,
.lang__btn:focus-visible {
  opacity: 1;
}

.lang__btn.is-on {
  background: color-mix(in srgb, currentColor 16%, transparent);
  box-shadow: inset 0 -2px 0 currentColor;
}

@media (max-width: 420px) {
  .lang__btn {
    min-width: 1.9rem;
    padding: 0 0.28rem;
    font-size: 0.66rem;
    letter-spacing: 0.04em;
  }
}
</style>
