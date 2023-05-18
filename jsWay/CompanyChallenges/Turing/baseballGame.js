const check = operations => {
    const stack = []
    for (const item of operations) {
        if (Number.isInteger(parseInt(item))) {
            stack.push(parseInt(item))
        }
        if (item === 'C') {
            stack.pop()
        }
        if (item === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        }
        if (item === '+') {
            const num1 = stack[stack.length - 1]
            const num2 = stack[stack.length - 2]
            stack.push(num1 + num2)
        }
    }
    return stack.reduce((cal, v) => cal + v, 0)
}

const input1 = ['5', '2', 'C', 'D', '+']
console.log(check(input1))
