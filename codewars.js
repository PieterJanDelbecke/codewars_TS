function countBits(n) {
  return n
    .toString(2)
    .split("")
    .filter((num) => +num === 1).length;
}

console.log(countBits(1234));
// console.log(countBits())
// console.log(countBits())
// console.log(countBits())
