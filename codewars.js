function squreDigits(num){
    return Number(num.toString().split("").map(number => Math.pow(Number(number), 2)).join(""))
}

console.log(squreDigits(3212))