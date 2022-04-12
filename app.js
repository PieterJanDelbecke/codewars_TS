"use strict";
function abbrevName(name) {
    let letters = [];
    name.split(" ").forEach((word) => {
        letters.push(word.charAt(0).toUpperCase());
    });
    return letters.join('.');
}
console.log(abbrevName('Sam Harris'));
