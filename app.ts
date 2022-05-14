class Department {
  private id: string
  private name: string
  protected employees: string[] = []

  constructor ( id: string, name: string){
    this.id = id
    this.name = name
  }

  describe(this:Department){
    console.log(`department: ${this.name}, ID: ${this.id}`)
  }

  addEmployee(employee:string){
    // this.employees.push(employee)
    this.employees = [...this.employees, employee]
  }

  outputInfo(){
    console.log(`number of employees: ${this.employees.length}`)
    this.employees.forEach( (employee, index) => {
      console.log(`employee nr ${index +1} : ${employee}`)
    })
  }

}

class ITDepartment extends Department {
  admins: string[]

  constructor(id:string, admins:string[]){
    super(id, 'IT')
    this.admins = admins
  }

}

class AccountingDepartment extends Department {
  constructor (id: string, private reports: string[]){
    super(id, 'Accounting')
  }
  addReport(text:string){
    this.reports.push(text)
  }
  printReports(){
    console.log(this.reports)
  }
  addEmployee (name:string){
    if (name==="Max"){
      return
    }
    this.employees.push(name)
  }
}

// const IT = new ITDepartment("D6", ['Pieter', 'Max'])
// IT.addEmployee('Alessandra')
// IT.addEmployee('John')
// IT.addEmployee('Marc')
// IT.describe()
// IT.outputInfo()
// console.log(IT.admins)

const accounting = new AccountingDepartment ('d2',[])
accounting.addReport("something went wrong...")
accounting.printReports()
accounting.addEmployee("Kurt")
accounting.addEmployee("Max")
accounting.addEmployee("Josh")
accounting.outputInfo()