function descendingOrder(n:number){
    return +n.toString().split("").map(e => +e).sort((a,b) => b-a).join("")
}

console.log(descendingOrder(123456789))