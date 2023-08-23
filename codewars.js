// function XO(str) {
//   let x = 0;
//   let o = 0;
//   str = str
//     .toLowerCase()
//     .split("")
//     .map((i) => {
//       if (i === "x") x++;
//       if (i === "o") o++;
//     });
//   return x === o ? true : false;
// }

function XO(str) {
  str = str.toLowerCase().split("");
  return (
    str.filter((l) => l === "x").length === str.filter((l) => l === "o").length
  );
}

console.log(XO("xo"));
console.log("-----------------------");
console.log(XO("xxOo"));
console.log("-----------------------");
console.log(XO("xxxm"));
// console.log(XO("Oo"));
// console.log(XO("ooom"));
