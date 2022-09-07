function maskify(cc){
    return cc.split("").map((item, value) => value < (cc.length - 4) ? '#' : item).join("")

}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))