<script setup lang="ts">
import {useMenuStore} from "@/stores/menu";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const menuStore = useMenuStore();
</script>

<template>
  <transition name="slide-fade">
    <nav v-show="menuStore.isShow">
      <div class="menu-close-btn">
        <button @click="menuStore.toggleMenu">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
      <div class="nav-menu">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
            <ul>
              <li><RouterLink to="/">MENU1</RouterLink></li>
              <li><RouterLink to="/">MENU2</RouterLink></li>
              <li><RouterLink to="/">MENU3</RouterLink></li>
              <li><RouterLink to="/">MENU4</RouterLink></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
            <ul>
              <li><RouterLink to="/">MENU1</RouterLink></li>
              <li><RouterLink to="/">MENU2</RouterLink></li>
              <li><RouterLink to="/">MENU3</RouterLink></li>
              <li><RouterLink to="/">MENU4</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
</style>