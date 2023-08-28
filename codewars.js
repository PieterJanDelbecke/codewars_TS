function nbYear(p0, percent, aug, p) {
  let total = p0;
  let count = 0;
  while (total <= p) {
    total = Math.floor(total + total * percent * 0.01 + aug);
    count++;
  }
  return count;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
