const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
])

console.log(entries)
const obj = Object.fromEntries(entries)

console.log(obj)