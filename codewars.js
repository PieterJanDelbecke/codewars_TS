function findOutlier(integers) {
  const odd = [];
  const even = [];
  integers.forEach((num) => {
    num % 2 === 0 ? even.push(num) : odd.push(num);
  });
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
