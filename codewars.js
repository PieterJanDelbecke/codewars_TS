"use strict";
function getMiddle(s) {
    let arr = s.split("");
    if (arr.length % 2 === 0) {
        return arr[arr.length / 2 - 1] + arr[arr.length / 2];
    }
    else {
        return arr[Math.floor(arr.length / 2)];
    }
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
