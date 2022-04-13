function findDifference(a: number[], b:number[]):number{
    let dimA = a.reduce((a,b)=> a*b)
    let dimB = b.reduce((a,b)=> a*b)
    return dimA > dimB ? dimA - dimB : dimB - dimA
}


console.log(findDifference([3,2,5],[1,4,4]))