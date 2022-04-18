function digitize(n:number){
    let arr:number[] = []
    n.toString().split("").forEach((e) =>{
        arr.unshift(+e)
    })
    return arr
}

console.log(digitize(35231))