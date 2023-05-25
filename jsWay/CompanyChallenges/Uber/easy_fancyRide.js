/**
 *
 * @param l
 * @param fares
 * @returns {string}
 * Being a new Uber user, you have $20 off your first ride.
 * You want to make the most out of it and drive in the fanciest car you can afford,
 * without spending any out-of-pocket money. There are 5 options,
 * from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".
 *
 * You know the length l of your ride in miles and how much one mile costs for each car. Find the best car you can afford.
 */

function solution(l, fares) {
  const cars = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
  const findIndex = fares.reduce((prevValue, currentValue, index) => (currentValue * l <= 20 ? index : prevValue), 0)
  return cars[findIndex]
}

console.log(solution(30, [0.3, 0.5, 0.7, 1, 1.3]))
