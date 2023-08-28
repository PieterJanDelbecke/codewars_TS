function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023, 1, 2]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([0]));
// console.log(oddOrEven([1]));
