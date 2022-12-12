<script setup>
  import print_32 from '../algorithms/int-print-32bit'
  const num = 5
  console.log( num + " 打印32位状态>>", print_32(num).join(""))
  // console.log( -5 + " 打印32位状态>>", print_32(-5).join(""))
  // console.log(5 + (~5 + 1))
</script>

<template>
  <Home/>
  <h1>整数打印32位状态</h1>
</template>

<style scoped>

</style>