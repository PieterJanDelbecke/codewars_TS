const myObj = {
    one: 1,
    two: 2,
    three: 3
}

const string = JSON.stringify(myObj)

const back = JSON.parse(string)

console.log(back)