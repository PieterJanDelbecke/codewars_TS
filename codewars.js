function busStops(numbers) {
  let total = 0;
  numbers.forEach((item) => {
    const [on, off] = item;
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
