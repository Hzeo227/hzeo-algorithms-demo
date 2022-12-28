export function rangeSum(arr, L, R) {
  return L === 0 ? arr[R] : arr[R] - arr[L - 1]
}

export function rangeSumTemp(arr) {
  const sumArrayResult = [];
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    sumArrayResult.push(sum)
  }
  return sumArrayResult
}