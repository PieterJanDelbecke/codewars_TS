function longest(s1, s2) {
  const s = (s1 + s2).split("").sort();
  const mySet = new Set(s);
  return Array.from(mySet).join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
