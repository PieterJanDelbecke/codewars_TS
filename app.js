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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const IT = new ITDepartment("D6", ['Pieter', 'Max']);
IT.addEmployee('Alessandra');
IT.describe();
IT.outputInfo();
console.log(IT.admins);
