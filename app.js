"use strict";
function repeatStr(n, s) {
    let str = [];
    for (let i = 0; i < n; i++) {
        str.push(s);
    }
    return str.join("");
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
