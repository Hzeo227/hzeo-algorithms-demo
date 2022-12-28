<script setup>
  import selectionSort from '../algorithms/sort/selection-sort'
  import bubbleSort from '../algorithms/sort/bubble-sort'
  import insertSort from '../algorithms/sort/insert-sort'
  

  const arr = [3, 5, 8, 9, 7, 4, 2, 1, 0, 5, 9]

  const selection = () => {
    console.log("sort-before >> ", arr.join(" "))
    selectionSort(arr)
    console.log("selection-sort-after >> ", arr.join(" "))
  }

  const bubble = () => {
    console.log("sort-before >> ", arr.join(" "))
    bubbleSort(arr)
    console.log("bubble-sort-after >> ", arr.join(" "))
  }
  
  const insert = () => {
    console.log("sort-before >> ", arr.join(" "))
    insertSort(arr)
    console.log("insert-sort-after >> ", arr.join(" "))
  }

</script>

<template>
  <h1>排序</h1>
  <div class="category">
    <button @click="selection">selection sort</button>
    <button @click="bubble">bubble sort</button>
    <button @click="insert">insert sort</button>
    
  </div>
</template>

<style lang="less" scoped>
  .category {
    display: flex;
    flex-direction: column;

    button {
      width: 150px;
      margin: 5px 0;
      padding: 5px 0;
    }
  }
</style>