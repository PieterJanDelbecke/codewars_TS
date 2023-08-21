// function getCount(str) {
//   const regex = /[aouie]/gi;
//   const found = str.match(regex);
//   return found ? found.join("").length : 0;
// }

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("Hello"));
console.log(getCount("my pyx"));
