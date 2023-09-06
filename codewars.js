function sequenceSum(begin, end, step) {
  const arr = [];
  for (let i = begin; i <= end; i += step) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
