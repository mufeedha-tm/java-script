//function passing another function as an argument
//synchronous&asynchronous

//---why we use callBack function---
//asynchronous -handled asynchronous operations
//custamise behaviour of general purpose function
//avoide blocking code execution
//`use for multiple string

//this is our callback function
function greetUser(name){
    console.log(`Hello ${name}`);  
}
//this function takes another function (callback function)as a parameter
function getUserInput(callback){
    const name = "Mufeedha"
    callback(name); //calling the callback function with the user's name
}

getUserInput(greetUser);


//---callBackHell /pyramid of doom----
//multiple nested callbacks make the code difficult to maintain and read.
//to prevent callbackhell use promise

function showAge(age){
    console.log(`You are ${age}years old`);
    
}
function getUserAge(callback){
    const age = 21
    callback(age);
}
getUserAge(showAge);
