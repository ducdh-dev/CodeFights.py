function solution(names, time, netValue, isOnVacation) {
  let mergeSales = names.map((name, index) => [
    name,
    time[index],
    netValue[index],
    isOnVacation[index],
    (time[index] * netValue[index]) / 365,
  ])
  mergeSales = mergeSales.filter(item => !item[3])
  // TODO: sort multiple conditions
  mergeSales.sort((a, b) => {
    return b[4] - a[4] || b[1] - a[1] || b[0].localeCompare(a[0])
  })
  console.log('duclog mergeSales', mergeSales)
  return mergeSales.map(item => item[0])
}

// console.log(
//   solution(
//     ['lead1', 'lead2', 'lead3', 'lead4', 'lead5'],
//     [250, 300, 250, 260, 310],
//     [1000, 800, 1100, 1200, 1000],
//     [true, false, true, false, false],
//   ),
// )
//
// console.log(
//   solution(
//     ['abcd', 'dba', 'abc', 'abcdd', 'abcc', 'abd', 'abcde', 'abcda', 'abca', 'abcbc', 'bba'],
//     [20, 20, 20, 20, 10, 20, 10, 10, 20, 20, 10],
//     [1000, 1200, 1000, 1000, 1000, 1200, 1200, 1200, 1000, 1000, 1100],
//     [false, false, false, false, false, true, false, false, true, false, false],
//   ),
// )
//
console.log(
  solution(
    ['lead1', 'lead2', 'lead3', 'lead4', 'lead5'],
    [0, 300, 300, 250, 300],
    [200, 800, 1000, 1000, 800],
    [false, false, false, false, false],
  ),
)
//
// console.log(
//   solution(
//     ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
//     [1, 2, 3, 4, 5, 6, 8, 10, 12],
//     [120, 60, 40, 30, 24, 20, 15, 12, 10],
//     [false, true, false, false, true, false, false, false, false],
//   ),
// )
