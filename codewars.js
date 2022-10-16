const myMap = new Map()

myMap.set("uuid", new Map())

myMap.get("uuid").set('myObj', {one: "one", two: "two", three: "tree"})
myMap.get("uuid").set('myArr', [1,2,3,4,5,6,7,8,9])

console.log(myMap.get("uuid").get("myArr"))