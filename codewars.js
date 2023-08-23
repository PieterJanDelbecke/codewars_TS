function isIsogram(str) {
  str = str.split("");
  const myStr = str.map((letter) => {
    return str.filter((item) => item.toLowerCase() === letter.toLowerCase())
      .length;
  });
  const myArr = myStr.find((number) => number > 1);
  return myArr ? false : true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
