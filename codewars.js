function hightAndLow(numbers) {
  const newNumbers = numbers.split(" ");
  const min = Math.min(...newNumbers);
  const max = Math.max(...newNumbers);
  return `${max} ${min}`;
}

console.log(hightAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
