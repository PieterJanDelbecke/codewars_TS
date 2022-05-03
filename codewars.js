"use strict";
function countPositives(input) {
    let pos = 0;
    let neg = 0;
    if (input === null || input.length === 0) {
        return [];
    }
    else {
        input.forEach((e) => e > 0 ? pos++ : neg += e);
        return [pos, neg];
    }
}
console.log(countPositives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositives([]));
console.log(countPositives(null));
