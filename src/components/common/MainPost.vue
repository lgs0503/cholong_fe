<script setup lang="ts">

import type {PostInfo} from "@/interface/common";

defineProps<{
  postInfo: PostInfo
}>()
</script>

<template>
  <div class="inner-board">
    <div class="inner-board-image">
      <img :src="postInfo.image" alt=""/>
    </div>
    <div class="inner-board-post">
      <h3 class="post-title">{{ postInfo.title }}</h3>
      <div class="post-category-form">
        <span class="post-category">{{ postInfo.category }}</span>
        <span class="post-date">{{ postInfo.date }}</span>
      </div>
      <div class="post-content">
        {{ postInfo.content }}
      </div>
      <div>
        <button class="button-more">Read More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
