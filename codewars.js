function accum(s){
    return s.toLowerCase().split("").map((letter, index) => letter.toUpperCase() + letter.repeat(index)).join("-")
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))