// 求数组中位置(a~b)的累加和
export function rangeSum(arr, L, R) {
  return L === 0 ? arr[R] : arr[R] - arr[L - 1]
}

// 前缀和数组
export function rangeSumTemp(arr) {
  const sumArrayResult = [];
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    sumArrayResult.push(sum)
  }
  return sumArrayResult
}