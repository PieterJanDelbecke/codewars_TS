const person= {
    name: "Dom",
    age: 28,
    vehicle: {
        year: 2010
    }
}

const vehicleYear = person.vehicle?.year

console.log(vehicleYear)