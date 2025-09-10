//function expression is a way to define a function inside an exression and assign into variable.
//syntax= let sum=function(){
//block code
//}
//sum()

const greet = function () {
    console.log("Hi");


}
greet();  //calling function
console.log(typeof greet); //check the type


//key features
//1.anonymous or named
//2.not hoisted
//3.can be used as an argument
//4. can be assigned to variables/objects