let string = "Extract the word 'coding' from this string"
let regex = /word|coding/g
let result = string.match(regex)
console.log(result)