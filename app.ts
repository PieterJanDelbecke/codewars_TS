function countSheep(num:number):string{
    let arr:string[]=[]
    if (num===0){
        return ''
    } else {
        for (let i = 1; i <= num; i++){
            arr.push(i + " sheep...")
        }
        return arr.join("")
    }
}

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))