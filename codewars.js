const myMap = new Map()

myMap.set('one', new Map())

myMap.get("one").set("two", 222)

console.log(myMap)