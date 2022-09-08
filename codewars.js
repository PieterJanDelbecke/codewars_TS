function longest(s1, s2) {
  const mySet = new Set();
  (s1 + s2).split("").forEach((item) => {
    mySet.add(item);
  });
  return Array.from(mySet).sort().join("")
}

console.log(longest("aretheyhere", "yestheyarehere"));
