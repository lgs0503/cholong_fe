<script setup lang="ts">
import { RouterView } from 'vue-router'
import ClientHeader from "@/components/layout/ClientHeader.vue";
import ClientFooter from "@/components/layout/ClientFooter.vue";
</script>

<template>
  <client-header/>

  <RouterView />

  <client-footer/>
</template>

<style scoped>
</style>
