<script setup lang="ts">
import MainPost from "@/components/common/MainPost.vue";
import type {PostInfo} from "@/interface/common";

defineProps<{
  postInfoList: PostInfo[]
}>()
</script>
<template>
  <h2 class="section-title">전체 글</h2>
  <div class="main-board" v-for="postInfo in postInfoList" :key="postInfo.idx">
    <main-post :postInfo="postInfo"/>
  </div>
</template>

<style scoped>
</style>
