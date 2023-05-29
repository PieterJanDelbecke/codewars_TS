function getCount(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log(getCount("abracadabra"));
console.log(getCount("qwrty"));
