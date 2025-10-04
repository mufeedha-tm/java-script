const prompt = require("prompt-sync")(); 

let userInput = prompt("Do you want the promise to succeed? (yes/no): ");

let mypromise = new Promise((resolve, reject) => {
    let success = (userInput.toLowerCase() === "yes"); 

    setTimeout(() => {
        if (success) {
            resolve(" Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    },2000);
});

mypromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise execution finished"));
