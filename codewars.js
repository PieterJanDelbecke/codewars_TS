"use strict";
function disemvowel(str) {
    let regex = /[aeuio]/gi;
    return str.replace(regex, '');
}
console.log(disemvowel("This website is for losers LOL!"));
