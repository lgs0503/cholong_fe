<script setup lang="ts">
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const title = ref("Cho-long 블로그");

</script>

<template>
  <header class="header">
    <div>
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div>
      {{ title }}
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>
  </header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
</style>
