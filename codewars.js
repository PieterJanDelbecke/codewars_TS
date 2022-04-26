"use strict";
function descendingOrder(n) {
    return +n.toString().split("").map(e => +e).sort((a, b) => b - a).join("");
}
console.log(descendingOrder(123456789));
