function findOdd(A) {
  for (i = 0; i < A.length; i++) {
    const letter = A[i];
    let count = 0;
    A.forEach((item) => {
      if (item === letter) count++;
    });
    if (count % 2 === 1) return letter;
  }
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
