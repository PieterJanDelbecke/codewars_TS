function dontGiveMeFive(start, end) {
  const arr = [];
  const regex = /5/;
  for (let i = start; i <= end; i++) {
    if (!regex.test(i)) arr.push(i);
  }
  return arr.length;
}

// console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
