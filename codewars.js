function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.slice(middle - 1, middle + 1);
  } else {
    return s.charAt(middle);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
