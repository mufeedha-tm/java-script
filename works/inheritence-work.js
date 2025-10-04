// Base class
class Vehicle {
    constructor(name) {
        this.name = name;   // initialization
    }

    sound() {
        console.log(`${this.name} makes a sound`);
    }
}

// Derived class inherits from Vehicle
class Car extends Vehicle {
    constructor(name, brand) {
        super(name);   // calls parent constructor
        this.brand = brand;
    }

    // Override sound method (polymorphism)
    sound() {
        console.log(`${this.name} (${this.brand}) goes Vroom Vroom!`);
    }
}

// Creating object
const myCar = new Car("Mustang", "Ford");
myCar.sound();
