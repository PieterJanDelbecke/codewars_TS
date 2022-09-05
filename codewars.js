function XO(str){
    const x = str.toLowerCase().split("").filter((item) => item === 'x').length
    const o = str.toLowerCase().split("").filter((item) => item === 'o').length
    return x === o ? true : false
}

console.log((XO('xo')))
console.log((XO('xxOo')))
console.log((XO('xxxm')))
console.log((XO('Oo')))
console.log((XO('ooom')))