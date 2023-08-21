function getCount(str) {
  const regex = /[aouie]/gi;
  const found = str.match(regex);
  return found.join("").length;
}

console.log(getCount("Hello"));
