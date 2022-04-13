function divisors(n: number){
    let arr:number[]=[]
    for (let i= 1; i <=n; i++){
        if (n%i===0){
            arr.push(i)
        }
    }
    return arr.length
}

console.log(divisors(1))
console.log(divisors(10))
console.log(divisors(11))