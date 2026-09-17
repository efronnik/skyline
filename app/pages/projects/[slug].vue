<script setup lang="ts">
import { getProject } from '~/data/projects'

definePageMeta({ darkHeader: true })

const { t } = useLocale()
const project = getProject(String(useRoute().params.slug))

if (!project)
  throw createError({ statusCode: 404, message: t('pages.notFoundProject') })

usePageSeo(() => ({
  title: t(`projects.items.${project.slug}.title`),
  description: t(`projects.items.${project.slug}.story`),
  path: `/projects/${project.slug}`,
  image: project.cover,
  type: 'article'
}))

const config = useRuntimeConfig()
useJsonLd(() => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: t(`projects.items.${project.slug}.title`),
  description: t(`projects.items.${project.slug}.story`),
  image: `${config.public.siteUrl}${project.cover}`,
  author: { '@type': 'Organization', name: 'LIMEN' }
}))
</script>

<template>
  <article v-if="project">
    <header class="hero">
      <NuxtImg
        :src="project.cover"
        :alt="t(`projects.items.${project.slug}.title`)"
        sizes="sm:100vw md:100vw lg:1600px"
        fit="cover"
        preload
        class="hero__img"
      />
      <div>
        <p>{{ t(`projects.items.${project.slug}.typology`) }}</p>
        <h1>{{ t(`projects.items.${project.slug}.title`) }}</h1>
      </div>
    </header>
    <div class="body">
      <ProjectMeta :project="project" />
      <section>
        <h2>{{ t('projects.story') }}</h2>
        <p>{{ t(`projects.items.${project.slug}.story`) }}</p>
      </section>
      <div class="gallery">
        <MediaFrame
          v-for="(src, index) in project.gallery"
          :key="src"
          :src="src"
          :alt="t(`projects.items.${project.slug}.title`)"
          :ratio="index === 1 ? '3 / 4' : project.ratio"
        />
      </div>
      <section>
        <h2>{{ t('projects.solution') }}</h2>
        <p>{{ t(`projects.items.${project.slug}.solution`) }}</p>
      </section>
      <section>
        <h2>{{ t('projects.result') }}</h2>
        <p>{{ t(`projects.items.${project.slug}.result`) }}</p>
      </section>
    </div>
    <CtaBand />
  </article>
</template>

<style scoped>
.hero {
  min-height: 72svh;
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
  max-width: none;
  object-fit: cover;
  opacity: 0.74;
}

.hero div {
  position: relative;
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--space-7);
}

h1,
h2 {
  font-family: var(--font-display);
  letter-spacing: -0.03em;
}

h1 {
  font-size: var(--fs-display);
  line-height: var(--lh-display);
}

.body {
  padding: var(--section) var(--pad);
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 1.6rem;
}

section p {
  max-width: 38rem;
  font-size: 1.15rem;
}

.gallery {
  display: grid;
  gap: 0.8rem;
}

@media (min-width: 800px) {
  .gallery {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
</style>
