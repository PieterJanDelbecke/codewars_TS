function getMiddle(s){
    let arr = s.split("").length
    return arr %2 === 0 ? s.slice((arr/2 - 1),(arr/2 + 1)) : s.charAt(arr/2 )
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))