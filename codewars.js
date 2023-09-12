function solution(number) {
  if (number < 0) return 0;
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) count += i;
  }
  return count;
}

console.log(solution(10));
console.log(solution(-10));
