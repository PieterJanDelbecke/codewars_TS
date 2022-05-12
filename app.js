"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`department: ${this.name}, ID: ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    outputInfo() {
        console.log(`number of employees: ${this.employees.length}`);
        this.employees.forEach((employee, index) => {
            console.log(`employee nr ${index + 1} : ${employee}`);
        });
    }
}
const accounting = new Department('A9', 'accounting');
accounting.addEmployee('Pieter-Jan');
accounting.addEmployee('Alessandra');
accounting.describe();
accounting.outputInfo();
