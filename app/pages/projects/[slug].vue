<script setup lang="ts">
import { getProject } from '~/data/projects'

definePageMeta({ darkHeader: true })

const project = getProject(String(useRoute().params.slug))

if (!project) {
  throw createError({ statusCode: 404, message: 'Сценарий не найден' })
}

usePageSeo({
  title: project.title,
  description: project.story,
  path: `/projects/${project.slug}`,
  image: project.cover,
  type: 'article'
})
</script>

<template>
  <article v-if="project">
    <header class="hero">
      <NuxtImg :src="project.cover" :alt="project.title" sizes="sm:100vw md:100vw lg:1920px" width="1920" height="1080" preload class="hero__img" />
      <div>
        <p>{{ project.typology }}</p>
        <h1>{{ project.title }}</h1>
      </div>
    </header>
    <div class="body">
      <ProjectMeta :project="project" />
      <section>
        <h2>История</h2>
        <p>{{ project.story }}</p>
      </section>
      <div class="gallery">
        <MediaFrame
          v-for="(src, index) in project.gallery"
          :key="src"
          :src="src"
          :alt="`${project.title}, кадр ${index + 1}`"
          :ratio="index === 1 ? '3 / 4' : '16 / 10'"
        />
      </div>
      <section>
        <h2>Решение</h2>
        <p>{{ project.solution }}</p>
      </section>
      <section>
        <h2>Результат</h2>
        <p>{{ project.result }}</p>
      </section>
    </div>
    <CtaBand title="Создать похожее решение" />
  </article>
</template>

<style scoped>
.hero {
  min-height: 86svh;
  display: grid;
  align-items: end;
  position: relative;
  background: var(--night);
  color: var(--paper);
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.hero div {
  position: relative;
  padding: calc(var(--header) + 2rem) var(--pad) var(--space-8);
}

h1,
h2 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h1 {
  font-size: var(--fs-display);
  line-height: 0.92;
}

.body {
  padding: var(--space-8) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: var(--space-7);
}

section p {
  max-width: 38rem;
  font-size: 1.2rem;
}

.gallery {
  display: grid;
  gap: 1rem;
}

@media (min-width: 800px) {
  .gallery {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>
