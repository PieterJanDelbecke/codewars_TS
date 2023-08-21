function getCount(str) {
  const regex = /[aouie]/gi;
  const found = str.match(regex);
  return found ? found.join("").length : 0;
}

// console.log(getCount("Hello"));
console.log(getCount("my pyx"));
