<script setup lang="ts">
import { contact, footerNav, primaryNav, site } from '~/data/site'
import { products } from '~/data/products'

const { t } = useLocale()
const year = new Date().getFullYear()

function footerLabel(item: { label: string, to: string }) {
  if (item.label === 'privacyNav') return t('legal.privacyNav')
  if (item.label === 'Cookies') return t('legal.cookiesTitle')
  if (item.label === 'contact') return t('nav.contact')
  return item.label
}
</script>

<template>
  <footer class="foot">
    <div class="foot__grid">
      <div>
        <p class="foot__brand">{{ site.name }}</p>
        <p class="foot__tag">{{ t('hero.slogan') }}</p>
        <AppButton to="#contact">{{ t('nav.quote') }}</AppButton>
      </div>
      <nav :aria-label="t('footer.studio')">
        <p class="foot__h">{{ t('footer.studio') }}</p>
        <NavLink v-for="item in primaryNav" :key="item.to" :to="item.to">{{ t(`nav.${item.label}`) }}</NavLink>
        <NavLink to="/partners">{{ t('nav.partners') }}</NavLink>
        <HashLink to="#contact">{{ t('nav.contact') }}</HashLink>
      </nav>
      <nav :aria-label="t('footer.collection')">
        <p class="foot__h">{{ t('footer.collection') }}</p>
        <NuxtLink
          v-for="item in products"
          :key="item.slug"
          :to="`/products/${item.slug}`"
          class="foot__prod"
        >
          {{ t(`products.${item.slug}.name`) }}
        </NuxtLink>
      </nav>
      <div>
        <p class="foot__h">{{ t('footer.contact') }}</p>
        <a v-if="contact.phone.href" :href="contact.phone.href">{{ contact.phone.value }}</a>
        <a v-if="contact.email.href" :href="contact.email.href">{{ contact.email.value }}</a>
        <a
          v-if="contact.instagram.href"
          :href="contact.instagram.href"
          rel="noopener noreferrer"
          target="_blank"
        >{{ contact.instagram.handle }}</a>
        <a v-if="contact.mapUrl" :href="contact.mapUrl" rel="noreferrer" target="_blank">{{ t('footer.directions') }}</a>
      </div>
    </div>
    <div class="foot__base">
      <p>© {{ year }} {{ site.legalName }}</p>
      <nav>
        <template v-for="item in footerNav" :key="item.to">
          <HashLink v-if="item.to.startsWith('#')" :to="item.to">{{ footerLabel(item) }}</HashLink>
          <NuxtLink v-else :to="item.to">{{ footerLabel(item) }}</NuxtLink>
        </template>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  background: var(--night);
  color: var(--paper);
  padding: var(--space-8) var(--pad) var(--space-6);
  min-width: 0;
  overflow-x: clip;
}

.foot__grid {
  display: grid;
  gap: var(--space-7);
  max-width: var(--max);
  margin: 0 auto;
}

.foot__brand {
  font-family: var(--font-display);
  letter-spacing: 0.22em;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}

.foot__tag {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.15rem;
  margin-bottom: 1.2rem;
  max-width: 16rem;
}

.foot__h {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint-bright);
  margin-bottom: 0.8rem;
}

nav,
.foot__grid > div {
  display: grid;
  gap: 0.4rem;
  align-content: start;
}

.foot a,
.foot p,
.foot__prod {
  font-size: 0.95rem;
}

.foot a:hover,
.foot__prod:hover {
  color: var(--joint-bright);
}

.foot__prod {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.foot__base {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  max-width: var(--max);
  width: 100%;
  min-width: 0;
  margin: var(--space-7) auto 0;
  padding-top: 1.1rem;
  border-top: var(--hair) solid var(--line-on-night);
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.foot__base nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  min-width: 0;
  max-width: 100%;
}

@media (min-width: 900px) {
  .foot__grid {
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
  }
}
</style>
