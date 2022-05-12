"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private id: string;
        // private name: string;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
        console.log(this.name);
        console.log(this.id);
    }
}
const accounting = new Department('Accounting', '007');
accounting.addEmployee('Pieter-Jan');
accounting.addEmployee('Alessandra');
accounting.printEmployeeInfo();
