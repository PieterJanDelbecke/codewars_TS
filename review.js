let sample = "3 blind mice."
let regex = /[^0-9aeiou]/ig
let result = sample.match(regex)
console.log(result)