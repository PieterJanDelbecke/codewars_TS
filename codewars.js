function getCount(string) {
  const vowels = string.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log(getCount("abracadabra"));
