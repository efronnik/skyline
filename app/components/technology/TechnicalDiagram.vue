<script setup lang="ts">
defineProps<{
  active: number
}>()
</script>

<template>
  <div class="diagram" role="img" :aria-label="`Схема скрытой двери, этап ${active + 1}`">
    <svg viewBox="0 0 420 460" fill="none">
      <rect x="90" y="30" width="240" height="400" stroke="currentColor" stroke-opacity="0.22" />
      <rect
        x="118"
        y="58"
        width="184"
        height="344"
        :stroke-opacity="active >= 2 ? 0.9 : 0.28"
        stroke="currentColor"
      />
      <path
        d="M118 58 V402"
        stroke="currentColor"
        :stroke-width="active >= 0 ? 3 : 1"
        :opacity="active === 0 ? 1 : 0.35"
      />
      <circle cx="118" cy="140" r="6" :opacity="active === 1 ? 1 : 0.25" fill="currentColor" />
      <circle cx="118" cy="300" r="6" :opacity="active === 1 ? 1 : 0.25" fill="currentColor" />
      <path
        d="M302 58 V402"
        stroke="currentColor"
        stroke-dasharray="4 6"
        :opacity="active >= 3 ? 0.9 : 0.2"
      />
      <path
        d="M90 430 H330"
        stroke="currentColor"
        :opacity="active >= 4 ? 1 : 0.2"
      />
    </svg>
    <p>Скрытая коробка · петли · flush-полотно</p>
  </div>
</template>

<style scoped>
.diagram {
  border: var(--hair) solid var(--line);
  padding: 1.4rem;
  color: var(--ink);
}

svg {
  width: 100%;
  height: auto;
}

p {
  margin-top: 0.8rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
