const students = [
    {name: 'Muhsina' , age:24 , grade:'A+'},
    {name: 'Mufeedha' , age:21 , grade:'A'},
    {name: 'Midlaj' , age:14 , grade:'B+'},


]
//accessing  datas
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})