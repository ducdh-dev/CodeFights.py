function solution(a) {
    let obj = {}
    let max = 0
    let result
    for (const item of a) {
        if (obj[item]) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        if (max < obj[item]) {
            max = obj[item]
            result = item
        }
        if (max === 2) {
            break
        }
    }
    return max === 2 ? result : -1
}

/**
 * dùng Set
 */
bestSolution = a => {
    const r = new Set()
    for (const e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}

console.log(bestSolution([2, 2, 1, 3, 5, 3, 2]))
console.log(bestSolution([2, 4, 3, 5, 1]))
console.log(bestSolution([28, 19, 13, 6, 34, 48, 50, 3, 47, 18, 15, 34, 16, 11, 13, 3, 2, 4, 46, 6, 7, 3, 18, 9, 32, 21, 3, 21, 50, 10, 45, 13, 22, 1, 27, 18, 3, 27, 30, 44, 12, 30, 40, 1, 1, 31, 6, 18, 33, 5]))
