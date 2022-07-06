function descendingOrder(n){
    return Number(n.toString().split("").map(number => +number).sort((a,b) => b - a).join(""))
}

console.log(descendingOrder(1021))
console.log(descendingOrder(15))
console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(123456789))
console.log(descendingOrder(111))