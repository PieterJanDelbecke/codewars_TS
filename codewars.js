function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => Number(item))
      .sort((a, b) => b - a)
      .map((item) => item.toString())
      .join("")
  );
}

console.log(descendingOrder(1021));
console.log(descendingOrder(15));
