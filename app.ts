class Department {
  private id: string
  private name: string
  private employees: string[] = []

  constructor ( id: string, name: string){
    this.id = id
    this.name = name
  }

  describe(this:Department){
    console.log(`department: ${this.name}, ID: ${this.id}`)
  }

  addEmployee(employee:string){
    this.employees.push(employee)
  }

  outputInfo(){
    console.log(`number of employees: ${this.employees.length}`)
    this.employees.forEach( (employee, index) => {
      console.log(`employee nr ${index +1} : ${employee}`)
    })
  }

}

const accounting = new Department('A9', 'accounting')
accounting.addEmployee('Pieter-Jan')
accounting.addEmployee('Alessandra')
accounting.describe()
accounting.outputInfo()

