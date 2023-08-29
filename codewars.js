function removeSmallest(numbers) {
  const myNumbers = [...numbers];
  const smallest = Math.min(...myNumbers);
  const index = myNumbers.findIndex((num) => num === smallest);
  myNumbers.splice(index, 1);
  return myNumbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));
