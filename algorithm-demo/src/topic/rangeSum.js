/**
 * 求数组中位置(a~b)的累加和
 * @param {Array} arr 任意长度数组
 * @param {number} L 左边界
 * @param {number} R 右边界
 * @returns number
 */
export function rangeSum(arr, L, R) {
  return L === 0 ? arr[R] : arr[R] - arr[L - 1];
}

/**
 * 前缀和数组
 * @param {Array} arr 有序数组
 * @returns 前缀和数组
 */
export function rangeSumTemp(arr) {
  const sumArrayResult = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumArrayResult.push(sum);
  }
  return sumArrayResult;
}
