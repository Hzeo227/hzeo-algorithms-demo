import swap from 'utils/swap'

export default function bubbleSort(arr) {
  if (arr === null || arr.length < 2) {
    return;
  }

  // 0~N 0~(N-1) 0~(N-2) 每次确定最大的数
  let N = arr.length
  for (let end = N - 1; end >= 0; end--) {
    // 0~1  1~2  2~3  3~4  (N-1)~N
    for (let pre = 0; pre < end; pre++) {
      if (arr[pre] > arr[pre + 1]) {
        swap(arr, pre, pre + 1)
      }
    }
  }

}