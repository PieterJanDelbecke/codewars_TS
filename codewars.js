function solution(str, ending) {
  const regex = new RegExp(ending + "$");
  return regex.test(str);
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
