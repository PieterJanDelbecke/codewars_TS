function spinWords(string) {
  string = string.split(" ");
  return string
    .map((word) => {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
// // console.log("This is a test");
// // console.log("This is another test");

// let word = "hello";
// console.log(word.split("").reverse().join(""));
// word = word.split("").reverse().join("");
// console.log(word.reverse());
