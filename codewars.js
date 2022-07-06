function getCount(str){
    const regex = /[a,e,i,o,u]/gi
    const found =  str.match(regex)
    return found ? found.length : 0
}

console.log(getCount("abracadabra"))
console.log(getCount("my pyx"))