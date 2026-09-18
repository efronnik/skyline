<script setup lang="ts">
const props = withDefaults(defineProps<{
  compact?: boolean
}>(), {
  compact: false
})

const { t } = useLocale()
const quote = useQuoteList()
</script>

<template>
  <section v-if="quote.lines.value.length" class="list" :aria-label="t('pdp.quoteList')">
    <header>
      <h2 v-if="!compact">{{ t('pdp.quoteList') }}</h2>
      <p>{{ t('pdp.quoteTotal') }}: {{ quote.total.value }} {{ t('pdp.pcs') }}</p>
    </header>
    <ol>
      <li v-for="(item, index) in quote.lines.value" :key="item.id">
        <p class="list__index">{{ index + 1 }}</p>
        <pre>{{ item.summary }}</pre>
        <div class="list__qty">
          <label>
            {{ t('pdp.line.qty') }}
            <input
              :value="item.qty"
              type="number"
              min="1"
              :max="quote.maxQty"
              @change="quote.setQty(item.id, Number(($event.target as HTMLInputElement).value))"
            >
          </label>
          <button type="button" :aria-label="t('pdp.removeLine')" @click="quote.remove(item.id)">
            ×
          </button>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  gap: 0.75rem;
}

header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.4rem 1rem;
}

h2,
header p {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
}

header p {
  color: var(--muted);
}

ol {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.7rem;
}

li {
  display: grid;
  gap: 0.45rem;
  padding: 0.7rem 0;
  border-top: var(--hair) solid var(--line);
}

.list__index {
  margin: 0;
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--joint);
}

pre {
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.92rem;
  white-space: pre-wrap;
}

.list__qty {
  display: flex;
  align-items: end;
  gap: 0.6rem;
}

label {
  display: grid;
  gap: 0.2rem;
  font-size: 0.82rem;
}

input {
  width: 4.5rem;
  min-height: 44px;
  padding: 0.35rem 0.1rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

button {
  width: 44px;
  height: 44px;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--muted);
}

button:hover {
  color: var(--ink);
}
</style>
