"use strict";
function digitize(n) {
    let arr = [];
    n.toString().split("").forEach((e) => {
        arr.unshift(+e);
    });
    return arr;
}
console.log(digitize(35231));
