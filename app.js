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
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
// const IT = new ITDepartment("D6", ['Pieter', 'Max'])
// IT.addEmployee('Alessandra')
// IT.addEmployee('John')
// IT.addEmployee('Marc')
// IT.describe()
// IT.outputInfo()
// console.log(IT.admins)
const accounting = new AccountingDepartment('d2', []);
accounting.addReport("something went wrong...");
accounting.printReports();
accounting.addEmployee("Kurt");
accounting.addEmployee("Max");
accounting.addEmployee("Josh");
accounting.outputInfo();
