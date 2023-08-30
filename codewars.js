function testing(array) {
  return array.map((num, index) => {
    return `${index + 1}: ${num}`;
  });
}

console.log(testing(["a", "b", "c"]));
console.log(testing([]));
