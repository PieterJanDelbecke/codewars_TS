function squareDigits(num:number){
    let arr:number[] = num.toString().split("").map((e)=>{
        return Math.pow(+e,2) 
    })
    return +arr.join('')
}

console.log(squareDigits(9119))