const myArray1 = [0, 1, 2, 3, 4, 5];
const myArray2 = [...myArray1, 6, 7, 8, 9];

// myArray2.sort((a, b) => b - a);
// console.log(mySort);
// console.log(myArray2)

// const myFilter = myArray2.filter((item)=> item%2 === 0)
// console.log(myArray2)
// console.log(myFilter)

const myFind = myArray2.find((item) => item > 6)
console.log(myFind)
