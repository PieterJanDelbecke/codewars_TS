function findOutlier(integers) {
  const even = integers.filter((num) => num % 2 === 0);
  const odd = integers.filter((num) => num % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
