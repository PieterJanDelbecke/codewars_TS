"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        // this.employees.push(employee)
        this.employees = [...this.employees, employee];
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
    describe() {
        console.log("IT Department" + this.id);
    }
}
