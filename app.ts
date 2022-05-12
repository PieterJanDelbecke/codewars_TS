class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = []

  constructor (private name:string,private id: string){
    this.name = name;
    this.id = id;
  }

  describe(this:Department) {
    console.log("Department: " + this.name)
  }
  addEmployee(employee: string){
    this.employees.push(employee)
  }
  printEmployeeInfo(){
    console.log(this.employees.length)
    console.log(this.employees)
    console.log(this.name)
    console.log(this.id)
  }
}

const accounting = new Department('Accounting','007')

accounting.addEmployee('Pieter-Jan')
accounting.addEmployee('Alessandra')
accounting.printEmployeeInfo()