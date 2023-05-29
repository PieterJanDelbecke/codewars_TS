function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((number) => {
      return Math.pow(number, 2);
    })
    .join("");
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
