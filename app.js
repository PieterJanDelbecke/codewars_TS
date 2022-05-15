"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = {
    name: 'Max',
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet('Hi there - I am');
