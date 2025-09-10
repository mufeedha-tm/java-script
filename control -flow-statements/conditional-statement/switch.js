const prompt = require ('prompt-sync')();
let day= prompt ("Enter the day: ");

// let day = "Monday";

switch (day) {
    case "Monday":
        console.log("start of work week");

        break;

    case "Friday":
        console.log("End of work week");
        break;

    case "Sunday":
        console.log("Weekend!");
        break;



    default:
        break;
}