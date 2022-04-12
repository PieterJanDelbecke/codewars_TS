function countSheep(arrayofSheep: (boolean | undefined | null)[]): number {
  let count: number = 0;
  arrayofSheep.forEach((value) => {
    if (value) {
      count++;
    }
  });
  return count;
}

let array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheep(array1));
