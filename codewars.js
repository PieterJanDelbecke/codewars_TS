function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(descendingOrder(1021));
console.log(descendingOrder(15));
