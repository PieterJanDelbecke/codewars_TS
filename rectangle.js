class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		return `My name is ${this.name}`;
	}
}

let charlie = new Animal("Charlie");

console.log(charlie.speak());

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	speak() {
		return `Woof! ${super.speak()}, I'm a ${this.breed} `;
	}
}

let spooky = new Dog("Spooky", "Border Collie");
console.log(spooky.speak());
