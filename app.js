"use strict";
function descendingOrder(n) {
    let arr = [];
    n.toString().split("").forEach(num => {
        arr.push(+num);
    });
    return +arr.sort((a, b) => b - a).join("");
}
console.log(descendingOrder(1234567));
