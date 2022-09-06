function findShort (s){
    let count = 100
    s.split(" ").forEach(item => {
        if (item.length < count) count = item.length
    })
    return count
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier then writin out basic ones"))
console.log(findShort("Let's travel abroud shall we"))

// myString = "five"
// myArray = [0,1,2,3,4]
// console.log(myString.length)
// console.log(myArray.length)