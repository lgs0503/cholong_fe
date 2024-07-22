<script setup lang="ts">
import {useMenuStore} from "@/stores/menu";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";
import type {MenuInfo} from "@/interface/common";

const menuStore = useMenuStore();

const menuList : MenuInfo[] = [
  {
    idx: 1,
    title: "Home",
    url: "",
    children: [
      {
        idx: 1,
        title: "MENU1",
        url: ""
      },
      {
        idx: 2,
        title: "MENU2",
        url: ""
      },
      {
        idx: 3,
        title: "MENU3",
        url: ""
      },
      {
        idx: 4,
        title: "MENU4",
        url: ""
      }
    ]
  },
  {
    idx: 2,
    title: "About",
    url: "",
    children: [
      {
        idx: 1,
        title: "MENU1",
        url: ""
      },
      {
        idx: 2,
        title: "MENU2",
        url: ""
      },
      {
        idx: 3,
        title: "MENU3",
        url: ""
      },
      {
        idx: 4,
        title: "MENU4",
        url: ""
      }
    ]
  }
];
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
          <li v-for="menu in menuList" :key="menu.idx">
            <RouterLink :to="menu.url">{{ menu.title }}</RouterLink>
            <ul>
              <li v-for="subMenu in menu.children" :key="subMenu.idx">
                <RouterLink :to="subMenu.url">{{ subMenu.title }}</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
</style>