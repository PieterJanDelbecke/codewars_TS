function cockroachSpeed(s: number):number{
    return Math.floor((s * 100000)/3600)
}

console.log(cockroachSpeed(1.08))