export default function print_32(val) {
  const result = [];

  for (let i = 31; i >= 0; i--) {
    
    result.push((val & (1 << i)) === 0 ? "0" : "1")

  }

  return result
}