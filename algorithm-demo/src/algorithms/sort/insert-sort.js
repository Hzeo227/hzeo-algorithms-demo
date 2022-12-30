import swap from 'utils/swap'
import copyArr from 'utils/copyArr'

export default function selectionSort(arr) {
  let res = copyArr(arr)
  if (res === null || res.length < 2) {
    return;
  }

  const N = res.length
  for (let end = 1; end < N; end++) {
    // 0~0  0~1  0~2  0~3  0~N
    for (let later = end; later > 0 && res[later] < res[later - 1]; later--) {
      swap(res, later, later - 1)
    }
  }
  return res
}