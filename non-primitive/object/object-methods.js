//you can store function inside object are called methods

//".this" - keywords = its refers the objects itself.(used to access properties and methods)
const car = {
    brand: "Toyota",
    start: function(){
        // console.log('car started');
        console.log(`${this.brand} is started`);
        
    }
}
car.start();