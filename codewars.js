function findOdd(A) {
	const arr = [];
	A.forEach((number) => {
		const numbers = A.filter((num) => num === number);
		arr.push([number, numbers.length]);
	});
	const result = arr.find(([number, index]) => index % 2 !== 0);
	return result[0];
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
