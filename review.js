let sampleWord = "1astr23ona3ut"
let regex = /(?=\w{5})(?=\D*\d{2})/
// let regex = /(?=\w{5})/
let result =  regex.test(sampleWord)
console.log(result)