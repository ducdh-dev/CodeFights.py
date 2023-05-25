function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  return cost_per_minute.map((item, index) => {
    return parseFloat((item * ride_time + cost_per_mile[index] * ride_distance).toFixed(2))
  })
}

console.log(solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]))
