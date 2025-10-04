//arrow function is a short term syntax for writing function in javascript,introduced in ES6

//ECMA script-ES6-2015

// const name = () => {
//     //block of code
// }

   // ---function declaration---

// function add (a,b){
//     return a+b;

// }
// console.log(add(2,4));

  //---  using arrow function----

const add = (a,b) => a+b;
console.log(add(2,2));

//----single parameter (no parentheses needed)---
const square = x => x * x;
console.log("square of 4: ",square(4));

// ---no parameters (empty parentheses)
const greet = () => console.log("Hlo...");
greet();

//---multiple-line function---
const divide = (a,b) => {
    const result = a / b;
    return result;
}
console.log("division of 10,2 is: ", divide(10,2));






