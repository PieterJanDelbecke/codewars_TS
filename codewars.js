const myArray1 = [0,1,2,3,4,5]

const myArray2 = [...myArray1,6,7,8,9]

const [a, b, c,...x] = myArray2

console.log({a,b,c,x})