<script setup lang="ts">
defineProps<{
  kicker?: string
  spec?: string
}>()
</script>

<template>
  <div class="label">
    <span v-if="kicker" class="label__kicker">{{ kicker }}</span>
    <span v-if="spec" class="label__spec">{{ spec }}</span>
  </div>
</template>

<style scoped>
.label {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.label__kicker {
  color: var(--joint);
}
</style>
