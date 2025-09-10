const prompt = require ('prompt-sync')();
let temperature = prompt ("Enter the temperature ");

// let temperature = 15;

if (temperature > 20) {
    console.log("it's warm outside");

} else {
    console.log("it's cool outside");

}
