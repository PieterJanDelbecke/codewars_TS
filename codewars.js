function arrayDiff(a, b) {
  for (i = 0; i < b.length; i++) {
    a = a.filter((item) => item !== b[i]);
  }
  return a;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));
