<script setup>

  import { rangeSum, rangeSumTemp } from '../topic/rangeSum';

  let L = 1
  let R = 4
  const submit = () => {
    console.log('submit')
  }

  const arr = [2, 3 , 5, 8, 6, 1, 2, 3]

  const sumArr = rangeSumTemp(arr)
  const result = rangeSum(sumArr, L, R)

</script>

<template>
  <hr>
  <h1>arr:{{arr}}</h1>
  <!-- <h1>sumArr:{{sumArr}}</h1> -->
  <h1>{{L}}-{{R}}: {{result}}</h1>
  <br><hr>

  <!-- 数组：<input type="text">
  <div>
    左范围：<input type="text">
    右范围：<input type="text">
  </div>
  <button @click="submit">submit</button> -->
  
</template>

<style scoped>

</style>