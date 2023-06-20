function solution(s) {
  let obj = {}
  for (const item of s) {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  }
  // TODO use Object.entries
  for (const [k, v] of Object.entries(obj)) {
    if (v === 1) return k
  }

  return '_'
}

/**
 * dùng indexOf và lastIndexOf
 */
function bestSolution(s) {
  const arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    // TODO use indexOf and lastIndexOf
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i]
    }
  }

  return '_'
}

console.log(bestSolution('abacabad'))
