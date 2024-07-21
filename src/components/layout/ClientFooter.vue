<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="footer-top-left">
        <div>
          <div class="text">Today</div>
          <div class="value">10</div>
        </div>
        <div>
          <div class="text">Week</div>
          <div class="value">20</div>
        </div>
        <div>
          <div class="text">Total</div>
          <div class="value">30</div>
        </div>
      </div>
      <div class="footer-top-right">
        <div title="관리자 페이지">
          <font-awesome-icon :icon="['fas', 'gear']" />
        </div>
        <div title="글쓰기">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </div>
        <div title="깃허브">
          <font-awesome-icon :icon="['fas', 'code-branch']" />
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      Copyright 2024. ChoLong inc. all rights reserved.
    </div>
  </footer>
</template>

<style scoped>
</style>
