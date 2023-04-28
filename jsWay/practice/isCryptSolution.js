const isValidNum = (num) => {
    return !(num.indexOf('0') === 0) || num === '0'
}

function solve(crypt, solution) {
    const mapValue = new Map(solution)
    const [num1, num2, result] = crypt.map(item => item.split('').map(v => mapValue.get(v)).join(''))
    console.log(num1)
    console.log(num2)
    console.log(result)
    return isValidNum(num1) &&
        isValidNum(num2) &&
        isValidNum(result) &&
        parseInt(num1) + parseInt(num2) === parseInt(result)
}

crypt = ["SEND", "MORE", "MONEY"]
solution = [['O', '0'],
    ['M', '1'],
    ['Y', '2'],
    ['E', '5'],
    ['N', '6'],
    ['D', '7'],
    ['R', '8'],
    ['S', '9']]

crypt2 = ["A", "A", "A"]
solution2 = [['A', '0']]

crypt3 = ["WASD",
    "IJKL",
    "AOPAS"]
solution3 = [["W","2"],
    ["A","0"],
    ["S","4"],
    ["D","1"],
    ["I","5"],
    ["J","8"],
    ["K","6"],
    ["L","3"],
    ["O","7"],
    ["P","9"]]

console.log('duclog solve', solve(crypt3, solution3))
