<script setup lang="ts">
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useMenuStore} from "@/stores/menu";

const title = ref("Cho-long 블로그");
const menuStore = useMenuStore();

</script>

<template>
  <header class="header">
    <div @click="menuStore.toggleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <h1 class="header-title">
      {{ title }}
    </h1>
    <div>
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>
  </header>
</template>

<style scoped>
</style>
