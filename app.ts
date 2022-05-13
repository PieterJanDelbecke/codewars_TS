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

class ITDepartment extends Department {
  admins: string[]

  constructor(id:string, admins:string[]){
    super(id, 'IT')
    this.admins = admins
  }

}

const IT = new ITDepartment("D6", ['Pieter', 'Max'])
IT.addEmployee('Alessandra')
IT.describe()
IT.outputInfo()
console.log(IT.admins)