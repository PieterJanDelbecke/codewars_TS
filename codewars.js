function accum(s) {
  s = s.split("").map((letter, index) => {
    let string = [];
    for (let i = 0; i <= index; i++) {
      if (i === 0) {
        string.push(letter.toUpperCase());
      } else {
        string.push(letter.toLowerCase());
      }
    }
    return string.join("");
  });
  return s.join("-");
}

console.log(accum("ZpglnRxqenU"));
