function solution(a) {
    return a.map((item, index) => a.map(item2 => item2[index]).reverse())
}

const a =
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

console.log(solution(a))
