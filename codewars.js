// const numbers = [1,2,3,4,5,6,7,8,9]
const numbers = {
    one: 1,
    two: 2,
    three: 3
}

// const result = numbers.filter(number => number%2 === 0)
// const result = numbers.reduce((a,b) => a + b)
// const result = numbers.sort((a,b) => b-a)
// for (let number of numbers){
//     console.log("number", number)
// }

// console.log(result)

// numbers.forEach((number, index)=> {
//     console.log(`${index+1}: ${number}`)
// })

const values = Object.values(numbers)
console.log(values)
const keys = Object.keys(numbers)
console.log(keys)