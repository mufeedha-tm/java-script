const person = {
    name:'Mufeedha',
    age:21,
    isstudent:false
}
console.log(person.name);
console.log(person.age);

// add or modify datas
person.city= "New York";
console.log(person);

person.age = 25;
console.log(person);

//delete city from person details
delete person.city;
console.log('final person details is: ',person);
