function maskify(cc){
    let arr =[]
    const stringLength = cc.length - 4
    arr = cc.split("").map((item, value) => {
        return value < stringLength ? '#' : item
    })
    return arr.join("")

}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))