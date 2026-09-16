<script setup lang="ts">
interface Props {
  to?: string | Record<string, unknown>
  href?: string
  type?: 'button' | 'submit'
  variant?: 'solid' | 'ghost' | 'line'
  invert?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  type: 'button',
  invert: false,
  disabled: false
})

const classes = computed(() => [
  'btn',
  `btn--${props.variant}`,
  { 'btn--invert': props.invert }
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <span><slot /></span>
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="classes">
    <span><slot /></span>
  </a>
  <button v-else :type="type" :class="classes" :disabled="disabled">
    <span><slot /></span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.25rem;
  border: var(--hair) solid currentColor;
  background: transparent;
  cursor: pointer;
  font-family: var(--font-spec);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background var(--duration-fast) var(--ease), color var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease);
}

.btn span {
  pointer-events: none;
}

.btn--solid {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.btn--solid:hover {
  background: var(--joint);
  border-color: var(--joint);
}

.btn--ghost {
  color: inherit;
}

.btn--ghost:hover {
  background: color-mix(in srgb, currentColor 8%, transparent);
}

.btn--line {
  border-color: var(--line-strong);
}

.btn--invert.btn--solid {
  background: var(--paper);
  color: var(--ink);
  border-color: var(--paper);
}

.btn--invert.btn--ghost,
.btn--invert.btn--line {
  color: var(--paper);
  border-color: var(--line-on-night);
}

.btn:active {
  transform: translateY(1px);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
