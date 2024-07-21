<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import type {ImageItem} from "@/interface/common";

defineProps<{
  imageList: ImageItem[]
}>()
</script>

<template>
  <Carousel :wrapAround="true" :autoplay="5000">
    <Slide v-for="slide in imageList" :key="slide.image">
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
