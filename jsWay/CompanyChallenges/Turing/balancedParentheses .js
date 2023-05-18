const input1 = '{[]{()}}'
const input2 = '[{}{}(]'
const input3 = '[]{}(){[]()}'

const check = myStr => {
  const open = ['{', '[', '(']
  const close = ['}', ']', ')']
  const arr = []

  for (const item of myStr) {
    if (open.includes(item)) {
      arr.push(item)
    }
    if (close.includes(item)) {
      const char = arr.pop()
      if (open.indexOf(char) !== close.indexOf(item)) {
        return false
      }
    }
  }

  return arr.length === 0
}

console.log(check(input1))
console.log(check(input2))
console.log(check(input3))
