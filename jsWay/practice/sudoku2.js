function solution(grid) {
    const valid = (callback) => {
        for(let i = 0; i < 9; i++) {
            const set = new Set()
            for(let j = 0; j < 9; j++) {
                const item = callback(i, j);
                if (item !=='.') {
                    if (set.has(item)) {
                        return false;
                    } else {
                        set.add(item);
                    }
                }
            }
        }
        return true
    }

    return valid((i, j) => grid[i][j]) // check hàng ngang unique
        && valid((i, j) => grid[j][i]) // check hàng dọc unique
        && valid((i, j) => grid[Math.floor(i/3)*3+Math.floor(j/3)][i%3*3+j%3]) // check các ma trận con 3 x 3
}

/**
 * check array chứa phần tử unique
 */
function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
}

/**
 * check array chứa phần tử unique không tính dấu .
 */
function checkIfArrayIsUniqueWithOutDot(myArray) {
    const s = new Set()
    for (const item in myArray) {
        if (item === '.') {
            continue
        }
        if (s.has(item)) {
            return false
        }
        s.add(item)
    }
    return true
}

const input1 =
    [[".",".",".","1","4",".",".","2","."],
    [".",".","6",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".","1",".",".",".",".",".","."],
    [".","6","7",".",".",".",".",".","9"],
    [".",".",".",".",".",".","8","1","."],
    [".","3",".",".",".",".",".",".","6"],
    [".",".",".",".",".","7",".",".","."],
    [".",".",".","5",".",".",".","7","."]]

console.log(solution(input1))
