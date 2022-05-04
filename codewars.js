"use strict";
function anchorize(text) {
    const regex = /((http|https|ftp|ftps|file|smb)\S+)/ig;
    let newStr = '<a href="$1">$1</a>';
    return text.replace(regex, newStr);
}
console.log(anchorize("hello FTP://world.com !"));
// 'hello <a href="FTP://world.com">FTP://world.com</a> !'
