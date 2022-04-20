"use strict";
function toJadenCase(str) {
    return str
        .split(" ")
        .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(" ");
}
console.log(toJadenCase("How Can Mirrors Be Real If Our Eyes Aren't Real"));
