function testing(array) {
  const arr = [];
  array.forEach((num, index) => {
    arr.push(`${index + 1}: ${num}`);
  });
  return arr;
}

console.log(testing(["a", "b", "c"]));
console.log(testing([]));
