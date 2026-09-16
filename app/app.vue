<script setup lang="ts">
const pageKey = (route: { fullPath: string }) => route.fullPath
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage :page-key="pageKey" />
    </NuxtLayout>
  </div>
</template>
