export default function copyArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i]
  }

  return res
}