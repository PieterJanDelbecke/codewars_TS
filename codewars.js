function printerError(s) {
  const regex = /[n-z]/gi;
  const found = s.match(regex);
  return `${found.length}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
