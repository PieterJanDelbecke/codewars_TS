function binaryArrayToNumber(arr) {
  let total = 0;
  let value = 1;
  arr.reverse().forEach((num) => {
    total += num * value;
    value *= 2;
  });
  return total;
}

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
