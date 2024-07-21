<script setup lang="ts">
import { RouterView } from 'vue-router'
import ClientHeader from "@/components/layout/ClientHeader.vue";
import ClientFooter from "@/components/layout/ClientFooter.vue";
import ClientNavigation from "@/components/layout/ClientNavigation.vue";
</script>

<template>
  <client-header/>
  <client-navigation/>
  <RouterView />
  <client-footer/>
</template>

<style scoped>
</style>
