function betterThanAverage(classPoints: number[], yourPoints:number):boolean{
    let average:number= (classPoints.reduce((currTotal, currValue)=> currTotal + currValue))/classPoints.length
    return yourPoints > average ? true : false
}

console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)