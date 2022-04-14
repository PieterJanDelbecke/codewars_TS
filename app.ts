function descendingOrder(n: number){
    let arr:number[] =  []
    n.toString().split("").forEach(num=>{
        arr.push(+num) 
    })
    return +arr.sort((a,b)=> b - a).join("")
}

console.log(descendingOrder(1234567))