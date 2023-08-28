function divisors(integer) {
  const divisorsArr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr.length ? `${integer} is prime` : divisorsArr;
}

console.log(divisors(15));
console.log(divisors(13));
