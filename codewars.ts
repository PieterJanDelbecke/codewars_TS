function dontGiveMeFive(start: number, end: number) {
    let count = 0;
  for (let i = start; i <= end; i++) {
    if(!i.toString().includes('5')){
        count++
    }
  }
  return count
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(53, 59));
