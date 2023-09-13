function digitalRoot(n) {
  function toArr(n) {
    const arr = n
      .toString()
      .split("")
      .map((num) => +num);
    return arr;
  }

  while (n.toString().length !== 1) {
    n = toArr(n).reduce((a, b) => a + b);
  }
  return n;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
