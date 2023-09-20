function duplicateCount(text) {
  let count = 0;
  text = text.toLowerCase().split("");
  let myText = text;
  console.log(myText);
  text.forEach((item) => {
    const filtered = myText.filter((char) => char === item);
    if (filtered.length > 1) {
      count++;
      myText = myText.filter((n) => n !== item);
    }
  });
  return count;
}

// console.log(duplicateCount(""));
// console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
