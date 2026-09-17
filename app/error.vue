<script setup lang="ts">
const { t } = useLocale()
const error = useError()
const is404 = computed(() => error.value?.statusCode === 404)

useSeoMeta({
  robots: 'noindex, nofollow'
})

function clear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="err">
    <p>{{ is404 ? '404' : t('error.code') }}</p>
    <h1>{{ is404 ? t('error.notFound') : t('error.fail') }}</h1>
    <p>{{ is404 ? t('error.notFoundLead') : t('error.failLead') }}</p>
    <div>
      <AppButton @click="clear">{{ t('error.home') }}</AppButton>
    </div>
  </div>
</template>

<style scoped>
.err {
  min-height: 100svh;
  display: grid;
  align-content: center;
  padding: var(--pad);
  background: var(--night);
  color: var(--paper);
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  max-width: 12ch;
  margin: 0.6rem 0 1rem;
}
</style>
