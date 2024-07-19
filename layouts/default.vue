<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <slot />
    <AppFooter />
  </div>
</template>
