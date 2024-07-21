<script setup lang="ts">

import type {BestImageItem} from "@/interface/common";
import {computed, ref} from "vue";

const props = defineProps<{
  imageList: BestImageItem[]
}>()

/** 두개 씩 짤라서 쓴다. 모바일 환경을위해 **/
const limitedItem1 = computed(() => props.imageList.slice(0, 2));
const limitedItem2 = computed(() => props.imageList.slice(2, 4));

</script>

<template>
  <h2 class="section-title">인기 게시글</h2>
  <div class="best-post">
    <div>
      <div v-for="imageInfo in limitedItem1" :key="imageInfo.idx">
        <div class="best-post-item">
          <img :src="imageInfo.image" alt=""/>
          <h4>{{ imageInfo.title }}</h4>
        </div>
      </div>
    </div>
    <div>
      <div v-for="imageInfo in limitedItem2" :key="imageInfo.idx">
        <div class="best-post-item">
          <img :src="imageInfo.image" alt=""/>
          <h4>{{ imageInfo.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
