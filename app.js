"use strict";
function getCount(str) {
    const regex = /[aeiou]/g;
    const found = str.match(regex);
    return found ? found.length : 0;
}
console.log(getCount("abracadabra"));
