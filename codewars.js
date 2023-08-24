function getSum(a, b) {
  [a, b] = [a, b].sort((c, d) => c - d);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));
