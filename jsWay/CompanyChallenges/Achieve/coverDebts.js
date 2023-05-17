const solution = (s, debts, interests) => {
    [debts, interests] = sortDebts(debts, interests)
    console.log('debts', debts)
    console.log('interests', interests)

    let result = 0
    const budget = s / 10
    while (debts.reduce((c, i) => c + i, 0) > 0) {
        let rest = budget
        debts = debts.map((debt, index) => {
            rest -= debt
            if (rest >= 0) {
                return 0
            } else {
                let newDept = -rest
                newDept += newDept * interests[index] / 100
                rest = 0
                return newDept
            }
        })

        if (rest <= 0) {
            result += budget
        } else {
            result += budget - rest
        }
    }

    return result
}

const sortDebts = (debts, interests) => {
    // const mergeDebts = debts.map((item, index) => [item, interests[index]])
    // const sortMergeDebts = mergeDebts.sort((a, b) => b[1] - a[1])
    // debts = sortMergeDebts.map(item => item[0])
    // interests = sortMergeDebts.map(item => item[1])
    // TODO Note Way to sort 2 arrays depend on sorting 1 array
    const indices = Array.from(interests.keys())
    indices.sort((a, b) => interests[b] - interests[a])

    debts = indices.map(i => debts[i])
    interests = indices.map(i => interests[i])
    return [debts, interests]
}

// For s = 50, debts = [2, 2, 5], and interests = [200, 100, 150]
console.log(solution(50, [2, 2, 5], [200, 100, 150]))
console.log(solution(40, [2, 2, 5], [75, 25, 25]))
