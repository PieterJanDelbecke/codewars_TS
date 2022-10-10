const map = new Map()

map.set('mdn', {one: "one"})
map.set('w3s', 'two')
const two = map.get('mdn')

const obj = Object.fromEntries(map)

const one = map.values()

console.log(one)