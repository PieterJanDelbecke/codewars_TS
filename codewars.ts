function makeNegative(num: number):number {
    return num >= 0 ? -num : num
}

console.log(makeNegative(42))
console.log(makeNegative(-42))