<script setup lang="ts">
const { t, ta } = useLocale()
</script>

<template>
  <section id="studio" class="studio" aria-labelledby="studio-title">
    <div class="studio__inner">
      <div class="studio__text">
        <SectionLabel :kicker="t('studio.kicker')" :spec="t('studio.spec')" />
        <h2 id="studio-title">{{ t('studio.title') }}</h2>
        <div class="studio__copy">
          <p v-for="item in ta('studio.paragraphs')" :key="item">{{ item }}</p>
        </div>
      </div>
      <div class="studio__visual" aria-hidden="true">
        <NuxtImg
          src="/images/factory-craft.jpg"
          alt=""
          width="960"
          height="640"
          sizes="(min-width: 980px) 50vw, 100vw"
          fit="cover"
          class="studio__img"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.studio {
  padding-top: var(--section);
  max-width: var(--max);
  margin: 0 auto;
  min-width: 0;
}

.studio__inner {
  display: grid;
  gap: 0;
}

/* mobile: photo first, with side padding */
.studio__visual {
  order: -1;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  margin: 0 var(--pad);
  border-radius: 4px;
}

.studio__text {
  display: grid;
  align-content: start;
  gap: 0;
  padding: 1.6rem var(--pad) var(--section);
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.2vw, 2.8rem);
  line-height: var(--lh-display);
  letter-spacing: -0.03em;
  max-width: 14em;
  margin: 0.6rem 0 0;
  overflow-wrap: break-word;
}

.studio__copy {
  display: grid;
  gap: 0.8rem;
  margin-top: 1rem;
}

.studio__copy p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.studio__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 980px) {
  .studio__inner {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: stretch;
  }

  /* desktop: text left, photo right — reset mobile order */
  .studio__visual {
    order: 0;
    aspect-ratio: auto;
    min-height: 420px;
  }

  .studio__text {
    padding: 0 var(--pad) 0 var(--pad);
  }

  h2 {
    font-size: clamp(1.8rem, 2.4vw, 2.6rem);
  }
}
</style>
