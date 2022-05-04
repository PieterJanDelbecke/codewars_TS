"use strict";
function test(word) {
    let regexNum = /[0-9]/; // checks if there is minimum 1 number
    let regexLet = /[a-z]/; // checks if there is minimum 1 lowercase letter
    let regex = /^[a-z0-9]{6,10}$/;
    let resultNum = regexNum.test(word);
    let resultLet = regexLet.test(word);
    let result = regex.test(word);
    return result && resultNum && resultLet;
}
function authList(arr) {
    return arr.every(test);
}
console.log(authList(['john123', 'alex222', 'sandra1', 'sandraW', 's']));
// console.log(authList('alex222'))
// console.log(authList('sandra1'))
// console.log(authList('sandraW'))
// console.log(authList('s'))
