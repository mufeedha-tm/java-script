// Async- async marks a function that will return a promise

// async function Hello(){

// } fn declaration

// const sayBye = async function (){

// } fn expression

// const sayHello = async () => {

// } arrow fn

// Await - pauses the function execution until a promise is resolved(or rejected)
// it makes asynchronous code look and behave like synchronous code.

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Data loaded!")
        },2000)
    })
}

async function getData(){
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
      
}
getData();