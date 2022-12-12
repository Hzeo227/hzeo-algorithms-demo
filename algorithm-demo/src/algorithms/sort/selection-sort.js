import swap from 'utils/swap'

export default function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }

  const N = arr.length
  for (let i = 0; i < N; i++) {
    let currentMinIndex = i
    for (let j = i + 1; j < N; j++) {
      // 找到最小值
      currentMinIndex = arr[j] < arr[currentMinIndex] ? j : currentMinIndex
    }
    // 交换
    swap(arr, currentMinIndex, i)
  }
}