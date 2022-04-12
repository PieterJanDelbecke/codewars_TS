"use strict";
function findAverage(array) {
    return (array.length !== 0) ? (array.reduce((currTotal, currValue) => currTotal + currValue)) / array.length : 0;
}
console.log(findAverage([1, 1, 1]));
console.log(findAverage([10, 20, 30]));
console.log(findAverage([]));
