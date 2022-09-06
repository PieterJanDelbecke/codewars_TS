function findShort (s){
  let arr = s.split(' ').map(i => i.length)
  return Math.min(...arr)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier then writin out basic ones"))
console.log(findShort("Let's travel abroud shall we"))

// const arr = [0,1,2,3,4,5]

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))