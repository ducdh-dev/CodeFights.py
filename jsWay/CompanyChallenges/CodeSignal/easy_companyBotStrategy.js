function solution(trainingData) {
  let sum = 0
  let count = 0
  for (const item of trainingData) {
    if (item[1] === 1) {
      sum += item[0]
      count++
    }
  }
  return count === 0 ? 0 : sum / count
}
