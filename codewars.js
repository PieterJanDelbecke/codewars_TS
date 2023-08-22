function highAndLow(numbers) {
  const myNumbers = numbers
    .split(" ")
    .map((number) => +number)
    .sort((a, b) => a - b);
  return `${Math.max(...myNumbers)} ${Math.min(...myNumbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
