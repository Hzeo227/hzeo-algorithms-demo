import swap from 'utils/swap'

export default function selectionSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }

  const N = arr.length
  for (let end = 1; end < N; end++) {
    // 0~0  0~1  0~2  0~3  0~N
    for (let later = end; later > 0 && arr[later] < arr[later - 1]; later--) {
      swap(arr, later, later - 1)
    }
  }
}