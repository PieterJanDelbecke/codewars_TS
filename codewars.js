"use strict";
function eightNumberString(str) {
    //   let regex = /^(\d | [1-9]\d | 1\d\d | 2[0-4]\d | 25[0-5])$/;
    let regex = /(^[1-9]?[0-9]{1}$)|(^1[0-9][0-9]$)|(^2[0-4][0-9]$)|(^25[0-5]$)/;
    return regex.test(str);
}
console.log(eightNumberString(""));
console.log(eightNumberString("0"));
console.log(eightNumberString("00"));
console.log(eightNumberString("55"));
console.log(eightNumberString("042"));
console.log(eightNumberString("123"));
console.log(eightNumberString("240"));
console.log(eightNumberString("255"));
console.log(eightNumberString("256"));
console.log(eightNumberString("999"));
