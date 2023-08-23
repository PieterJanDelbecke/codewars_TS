function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.slice(middle - 1, middle + 1)
    : s.charAt(middle);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
