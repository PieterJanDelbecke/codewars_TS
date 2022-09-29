const initialColumns = [
    ["name", { value: "Name", type: "text" }],
    ["status", { value: "Status", type: "text" }],
    ["priority", { value: "Priority", type: "text" }],
    ["email", { value: "Email", type: "text" }],
    ["phone", { value: "Phone", type: "text" }],
    ["source", { value: "Source", type: "text" }],
    ["from", { value: "From", type: "text" }],
];

const myMap = new Map(
    initialColumns.map((column, index) => {
        column[1].order = index;
        return column;
    })
)

const set = new Set()
const numbers = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
for (let number of numbers ){
    set.add(number)
}

console.log(...myMap)
console.log([...set])