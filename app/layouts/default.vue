<template>
  <div class="shell">
    <a class="skip-link" href="#content">К содержанию</a>
    <NavBar />
    <main id="content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
