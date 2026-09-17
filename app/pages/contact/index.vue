<script setup lang="ts">
import { contact } from '~/data/site'

const { t } = useLocale()
const { open } = useInquiryModal()

usePageSeo(() => ({
  title: t('contact.kicker'),
  description: t('contact.lead'),
  path: '/contact',
  image: '/images/interior-flush.jpg',
  noindex: true
}))

onMounted(() => {
  open()
})
</script>

<template>
  <div class="page">
    <SectionLabel :kicker="t('contact.kicker')" :spec="t('contact.spec')" />
    <h1>{{ t('contact.title') }}</h1>
    <p>{{ t('contact.lead') }}</p>
    <AppButton @click="open">{{ t('contact.open') }}</AppButton>
    <aside>
      <a v-if="contact.email.href" :href="contact.email.href">{{ contact.email.value }}</a>
      <a
        v-if="contact.instagram.href"
        :href="contact.instagram.href"
          rel="noopener noreferrer"
          target="_blank"
      >{{ contact.instagram.handle }}</a>
    </aside>
  </div>
</template>

<style scoped>
.page {
  padding: calc(var(--header) + 1.6rem) var(--pad) var(--section);
  max-width: 36rem;
}

h1 {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  line-height: var(--lh-display);
  margin: 0.7rem 0 0.5rem;
}

p {
  color: var(--muted);
  margin-bottom: 1.2rem;
}

aside {
  display: grid;
  gap: 0.5rem;
  margin-top: 1.4rem;
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
