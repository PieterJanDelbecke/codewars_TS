function toJadenCase(str){
    return str.split(" ").map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1)
    }).join(" ")
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))