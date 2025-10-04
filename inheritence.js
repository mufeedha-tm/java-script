// one class can inherits properties and methods from another class(by using "extends"key words)

//Base class
class Animal{
    constructor(name){
        this.name = name;    //initialization
    }

    speak(){
        console.log(`${this.name} makes a sound`);
        
    }
}

//derived class inherits from animal;
class Dog extends Animal{
    constructor(name,breed){
    super(name);         //calls the parent constructor
    this.breed = breed;
    }

    //override speak method(polymorphism)
    speak(){
        console.log(`${this.name}-${this.breed} barks`);
        
    }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak()

