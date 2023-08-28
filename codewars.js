function busStops(numbers) {
  let total = 0;
  numbers.forEach(([on, off]) => {
    total += on - off;
  });
  return total;
}

console.log(
  busStops([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
