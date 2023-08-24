function toJadenCase(str) {
  return str
    .split(" ")
    .map((word) => {
      const first = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return `${first}${rest}`;
    })
    .join(" ");
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
