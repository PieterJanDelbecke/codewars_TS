const map = new Map()

map.set('mdn', {one: "one"})
map.set('w3s', 'two')
const two = map.get('mdn')

console.log(map)
console.log(two)