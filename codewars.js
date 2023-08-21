function squareDigits(num) {
  const myNum = num
    .toString()
    .split("")
    .map((num) => Math.pow(+num, 2));
  return +myNum.join("");
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
