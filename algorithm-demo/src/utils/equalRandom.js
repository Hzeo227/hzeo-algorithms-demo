// 已知 1~5随机
// 求 1~7随机
export function fn() {
  return Number.parseInt(Math.random() * 5) + 1
}

// 转换为 01 等概率
export function fn1() {
  let ans = 0
  do {
    ans = fn()
  } while (ans === 3);
  return ans < 3 ? 0 : 1
}

// 1-7 等概率
export function fn2() {
  let ans = 0
  do {
    ans = (fn1() << 2) + (fn1() << 1) + (fn1() << 0)
  } while (ans === 0)
  return ans
}

// 给：01不等概率
// 求：01等概率
export function _01fn() {
  return Math.random() < 0.83 ? 0 : 1
}

export function _01fn1() {
  let ans = 0
  do {
    ans = _01fn()
  } while (ans === _01fn());
  return ans
}

// 随机生成最大值不超过maxValue，长度为0~maxLen的数组
export function randLenRandValue(maxLen, maxValue) {
  let len = Number.parseInt(Math.random() * maxLen) + 1
  let arr = []
  for (let i = 0; i < len; i++) {
    arr[i] = Number.parseInt(Math.random() * maxValue) + 1
  }
  return arr
}

// 判断数组是否排序
export function isSorted(arr) {
  if (arr.length < 2) {
    return truek
  }
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if(max > arr[i]) {
      return false
    }
    max = Math.max(max, arr[i])
  }
  return true
}