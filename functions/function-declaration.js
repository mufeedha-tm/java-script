//function declaration is one of the ways of to define function
//syntax= function functionName(){
//.......//function body
//}
//()this is parantix ,the content inside parantix called parameter

function greet(name){
    console.log("Hello, "+ name);

}
greet("Mufeedha");

//key features
//1.Hoisting-calling a function before defining it.
//2.Named function- function declaration must have a function name.
//3.Global/local scope-if defined outside in any block,it globally scoped.
//                    -if defined inside in any block,it locally scoped.