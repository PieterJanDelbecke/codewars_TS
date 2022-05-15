abstract class Department {
  protected id: string
  protected name: string
  protected employees: string[] = []

  constructor ( id: string, name: string){
    this.id = id
    this.name = name
  }

   abstract describe(this:Department):void;

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

  describe() {
    console.log("IT Department" + this.id)
  }

}
