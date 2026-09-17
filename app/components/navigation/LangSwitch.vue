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
  align-items: center;
  gap: 0.15rem;
}

.lang__btn {
  min-height: 36px;
  min-width: 36px;
  padding: 0 0.35rem;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  opacity: 0.45;
}

.lang__btn.is-on,
.lang__btn:hover {
  opacity: 1;
}
</style>
