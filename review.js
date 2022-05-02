let repeatNum = "42 42 42"
let regex = /(\d+)\s\1\s\1/
let resultTest = regex.test(repeatNum)
let resultMatch = repeatNum.match(regex)
console.log(resultTest)
console.log(resultMatch)