<script setup lang="ts">
const error = useError()
const is404 = computed(() => error.value?.statusCode === 404)

function clear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="err">
    <p>{{ is404 ? '404' : 'Ошибка' }}</p>
    <h1>{{ is404 ? 'Такой плоскости нет.' : 'Страница не собралась.' }}</h1>
    <p>{{ is404 ? 'Проверьте адрес или вернитесь в коллекцию.' : 'Попробуйте обновить страницу.' }}</p>
    <div>
      <AppButton to="/products">Коллекция</AppButton>
      <button type="button" class="back" @click="clear">На главную</button>
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
  line-height: 0.95;
  max-width: 12ch;
  margin: 0.6rem 0 1rem;
}

.back {
  min-height: 48px;
  margin-left: 0.6rem;
  border: var(--hair) solid var(--line-on-night);
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: var(--font-spec);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.68rem;
  padding: 0 1rem;
}
</style>
