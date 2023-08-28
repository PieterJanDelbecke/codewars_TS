function oddOrEven(array) {
  if (array.length === 0) return "even";
  const myArr = array.reduce((a, b) => a + b);
  return myArr % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023, 1, 2]));
console.log(oddOrEven([]));
console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
