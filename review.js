let person = {
    firstName: "Pieter-Jan",
    lastName: "Delbecke",
    city: "Sydney",
    age: 40,
    awesome: true
}

let jsonPerson = JSON.stringify(person)
let jsonParse = JSON.parse(jsonPerson)
console.log(jsonPerson)
console.log(jsonParse)