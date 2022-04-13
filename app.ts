function summation(num:number):number{
    let total:number=0
    for (let i = 1; i <= num; i++){
        total += i
    }
    return total
}

console.log(summation(1))
console.log(summation(8))