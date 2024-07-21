<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {ImageItem} from "@/interface/common";

defineProps<{
  imageList: ImageItem[]
}>()
</script>

<template>
  <Carousel :wrapAround="true" :autoplay="5000">
    <Slide v-for="slide in imageList" :key="slide">
      <div class="carousel__item">
        <img :src="slide.image" alt=""/>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  height: 300px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
}
.carousel__item >img {
   height: 300px;
   width: 100%;
   object-fit: cover;
}
.carousel__pagination{

}
</style>
