function solution(marathonLength, maxScore, submissions, successfulSubmissionTime) {
  if (successfulSubmissionTime === -1) {
    return 0
  }
  const lost1 = (submissions - 1) * 10
  const lost2 = successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength)
  const re1 = maxScore - lost1 - lost2
  const re2 = maxScore / 2
  return re1 < re2 ? re2 : re1
}
