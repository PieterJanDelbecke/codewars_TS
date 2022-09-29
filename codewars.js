class Car {
    constructor (wheels, color){
        this.wheels = wheels;
        this.color = color;
        this.speed = 200;
    }

    drive(){
        console.log(`Vroom, vroom,... I'm a ${this.color} car with ${this.wheels} wheels `)
    }
    fast(){
        console.log(`I can drive up to ${this.speed} km per hour`)
    }
}

class Mazda extends Car {
    constructor(wheels, color, price){
        super(wheels,color)
        this.price = price
    }
    purchase(){
        console.log(`The price of my mazda was ${this.price}`)
    }
}

const myCar = new Mazda(6, "green", 10000)
myCar.drive()
myCar.purchase()