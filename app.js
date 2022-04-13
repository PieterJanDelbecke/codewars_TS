"use strict";
function squareDigits(num) {
    let arr = num.toString().split("").map((e) => {
        return Math.pow(+e, 2);
    });
    return +arr.join('');
}
console.log(squareDigits(9119));
