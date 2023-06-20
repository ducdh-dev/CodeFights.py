/**
 * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place,
 * and all letters reverse their positions
 */

const solution = (str) => {
    const letters = str.split('').filter(item => /[a-zA-Z]/.test(item))
    const result = str.split('').map(item => {
        if (/[a-zA-Z]/.test(item)) {
            return letters.pop()
        }
        return item
    })

    return result.join('')
}

console.log(solution("a-bC-dEf=ghlJ!!"))
// J-lh-gfE=dCba!!
