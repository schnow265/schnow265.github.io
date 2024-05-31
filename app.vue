<template>
  <NuxtLayout>
    <div class="content">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'schnow265',
})
</script>

<style>
.content {
  padding: 10px
}

body {
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>