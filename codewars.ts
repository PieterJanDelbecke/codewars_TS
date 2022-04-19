function highAndLow(numbers:string){
    let arr = numbers.split(" ").map ( e => +e)
    return Math.max(...arr).toString() + " " + Math.min(...arr).toString()
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))