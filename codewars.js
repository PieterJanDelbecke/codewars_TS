"use strict";
function validatePin(pin) {
    let regex = /^\d{4}$|^\d{6}$/;
    return regex.test(pin);
}
console.log(validatePin("1"));
console.log(validatePin("12"));
console.log(validatePin("123"));
console.log(validatePin("1234"));
console.log(validatePin("12345"));
console.log(validatePin("123456"));
