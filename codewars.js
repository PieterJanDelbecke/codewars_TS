function highAndLow(numbers){
    const arr = numbers.split(" ").sort((a, b) => a - b)
    const newArr= `${arr[arr.length-1]} ${arr[0]}`
    return newArr
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))