function DNAStrand(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((letter) => {
      return pairs[letter];
    })
    .join("");
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
