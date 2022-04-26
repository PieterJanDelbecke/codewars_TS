function validatePin(num:string):boolean{
    let count = num.length
    let regex = /\D/g
    let found =  num.match(regex)
    return !found && (count === 4 || count ===6)? true : false
}

console.log(validatePin("1234"))
console.log(validatePin("123a"))
console.log(validatePin("4567"))
console.log(validatePin("123"))
console.log(validatePin("12345"))
console.log(validatePin("1"))