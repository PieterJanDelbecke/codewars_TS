function DNAStrand(dna) {
  return dna
    .split("")
    .map((i) => {
      switch (i) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "C":
          return "G";
          break;
        case "G":
          return "C";
          break;
      }
    })
    .join("");
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
