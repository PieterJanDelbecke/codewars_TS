"use strict";
function solve(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return arr.map(s => s.split('').reduce((t, c, i) => c.toLowerCase() === alphabet[i] ? t + 1 : t, 0));
}
console.log(solve(["abode"]));
