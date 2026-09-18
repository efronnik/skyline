<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  kicker: string
  spec: string
  title: string
  invert?: boolean
  image?: 'left' | 'right'
}>(), {
  invert: false,
  image: 'left'
})
</script>

<template>
  <section
    :id="id"
    class="offer"
    :class="{ 'offer--invert': invert, 'offer--image-right': image === 'right' }"
    :aria-labelledby="`${id}-title`"
  >
    <div class="offer__grid">
      <div class="offer__visual">
        <slot />
      </div>
      <div class="offer__copy">
        <SectionLabel :kicker="kicker" :spec="spec" />
        <h2 :id="`${id}-title`">{{ title }}</h2>
        <slot name="body" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.offer {
  padding: var(--section) var(--pad);
}

.offer--invert {
  background: var(--night);
  color: var(--paper);
}

.offer--invert :deep(.label) {
  color: color-mix(in srgb, var(--paper) 55%, transparent);
}

.offer--invert :deep(.label__kicker) {
  color: var(--joint-bright);
}

.offer__grid {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 1.6rem;
}

h2 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  letter-spacing: -0.04em;
  max-width: 16ch;
  margin: 0.7rem 0 0.8rem;
}

@media (min-width: 960px) {
  .offer__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2.4rem;
    align-items: center;
  }

  .offer--image-right .offer__grid {
    grid-template-columns: 0.95fr 1.05fr;
  }

  .offer--image-right .offer__copy {
    grid-column: 1;
    grid-row: 1;
  }

  .offer--image-right .offer__visual {
    grid-column: 2;
    grid-row: 1;
  }
}
</style>
