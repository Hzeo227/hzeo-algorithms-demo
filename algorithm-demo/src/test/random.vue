<script setup>
import { reactive, ref, computed } from 'vue';
import { randLenRandValue, isSorted } from 'utils/equalRandom'
import insertSort from 'sorts/insert-sort'

let arr = randLenRandValue(5, 100)

let res = isSorted(arr)

let arrSort = ref([])
setTimeout(() => {
  arrSort.value = insertSort(arr)
}, 3000);

// let state = reactive( { num: 0 } )
// let num = ref(0)
// const randomNum = () => {
//   num.value = fn()
// }

// let testTimes = 1000000
// let count = 0
// for (let i = 0; i < testTimes; i++) {
//   if (fn1() === 0) {
//     count++
//   }
// }
// console.log(count)
// console.log(fn1())

// console.log(fn2())

// count = 0
// let arr = []
// for (let i = 0;  i < 8; i++) {
//   arr[i] = 0
// }
// for (let i = 0; i < testTimes; i++) {
//   arr[fn2()]++
// }

// count = 0
// for (let i = 0; i < testTimes; i++) {
//   if (_01fn1() === 0) {
//     count++
//   }
// }

// const prob = computed(() => {
//   return count / testTimes
// })



</script>

<template>
  <!-- <h1>{{ num }}</h1>
  <button @click="randomNum">随机生成数字</button>

  <hr>
  <h3>生成0的概率是: {{ prob }}</h3>
  <h3>生成1-7的次数: {{ arr }}</h3> -->

  <h3>当前数组： {{ arr }}</h3>
  <h3>是否排序： {{ res }}</h3>
  <h3>排序完的数组： {{ arrSort }}</h3>


</template>

<style scoped>

</style>