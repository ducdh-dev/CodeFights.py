function solution(xp) {
  const result = []
  let sortXp = xp.map((x, i) => [i, x]).sort((a, b) => a[1] - b[1]);

  while (sortXp.length >= 2) {
    let min = Infinity
    let pair = null
    for (let i = 0; i < sortXp.length - 1; i++) {
      const [id0, x0] = sortXp[i];
      const [id1, x1] = sortXp[i + 1];
      if (min > x1 - x0) {
        min = x1 - x0
        pair = [[id0, x0], [id1, x1]]
      }
    }

    result.push(pair.map((player) => player[0]).sort((a, b) => a - b));
    const eliminateIndex = pair.map(item => item[0])
    sortXp = sortXp.filter(item => !eliminateIndex.includes(item[0]))
  }

  return result
}

console.log(solution([200, 100, 70, 130, 100, 800, 810]))
// solution(sortXp) = [[1, 4], [5, 6], [2, 3]]
