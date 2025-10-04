// A promise in js is an object that represent the eventual completion or failure of an asynchronous operation and its resulting value
// resolve- called when the operation is successful
// reject - called when the operation is failure

// .then - execute if the promise is resolved
// .catch - execute if the promise is rejected
// .finally - execute regardless of whether the promise is resolved or rejected

// creating promise
let mypromise = new Promise ((resolve,reject) => {             // creating promise object
    
    let success = false;

    setTimeout(()=>{
        if (success) {
            resolve("promise resolved successfully!")
        } else {
           reject("promise rejected") 
        }

    },2000)
});

mypromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("promise execution finished"));