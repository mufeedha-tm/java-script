const numbers = [10,20,30,40];

//Basic destructuring
const [a,b] = numbers;
console.log(a);
console.log(b);

//Skipping values
const [, , c] = numbers;
console.log(c);


//Using spread operator
const [x,...rest] = numbers;
console.log(x);
console.log(rest);

