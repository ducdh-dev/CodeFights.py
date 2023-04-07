function solution(source, challengeId) {
  const mathStr = `//DB ${challengeId}//`
  const result = []
  for (const ele of source) {
    if (ele.includes(mathStr)) {
      result.pop()
      result.push(ele.replace(mathStr, ''))
    } else if (!ele.includes('//')) {
      result.push(ele)
    }
  }
  return result
}

console.log(
  solution(
    [
      'abacaba  dabacaba',
      '//DB 5//abacaba  abacabadabacaba',
      'aaaaaaaa',
      '//DB 3//lalalala',
      'codesignal',
      '//DB 1//codesignal is awesome',
      '//DB 2//    spaces! ! ! ! !  ',
      '//DB 999//reallybignumber',
    ],
    2,
  ),
)
