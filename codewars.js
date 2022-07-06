function highAndLow(numbers){
    const arr = numbers.split(" ").map(number => +number)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
console.log(highAndLow("1 2 3"))
