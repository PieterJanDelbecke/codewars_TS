function getCount(str:string){
    let regex = /[aouie]/gi
    let arr =  str.match(regex)
    return arr ? arr.length : 0
}

console.log(getCount("abracadabra"))
console.log(getCount("dcd"))