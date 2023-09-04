function stray(numbers) {
  let x = numbers[0];
  let y = 0;
  let countX = 0;
  let countY = 0;
  numbers.forEach((number) => {
    if (number === x) {
      countX++;
    } else {
      y = number;
      countY++;
    }
  });
  return countX > countY ? y : x;
}

console.log(stray([1, 1, 2]));
// console.log(stray[(1, 2, 1)]);
