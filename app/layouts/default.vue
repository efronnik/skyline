<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <div class="shell">
    <a class="skip-link" href="#content">{{ t('skip') }}</a>
    <NavBar />
    <main id="content">
      <slot />
    </main>
    <SiteFooter />
    <InquiryModal />
  </div>
</template>
