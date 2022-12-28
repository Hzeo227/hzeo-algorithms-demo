<script setup>
</script>

<template>
    <div class="algorithm">
    <router-link to="/int-print-32bit">整数打印32位状态</router-link>
    <router-link to="/sort">排序</router-link>
    <router-link to="/range-sum">求数组中某范围的累加和</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
  .algorithm {
    display: flex;
    flex-direction: column;
  }
</style>
