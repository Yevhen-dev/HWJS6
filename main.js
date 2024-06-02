// Rewrite code use let and const insted of var
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Insted of var
let message = 'test';
function example() {
    if (true) {
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}

example();



// Use for in to show value form object to console.log 
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const item in person) {
    console.log(` ${ item } : ${ person[item] } `);
}



// Use for of and for in to show value form object which is inside array
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];


for( let person of students ) {
    console.log( ` Information about ${ person.name }: ` )
    for( let value in person ) {
        console.log( ` ${ value } : ${ person[value] } ` )
    }
}





// Create function which return users year of birth when user tape his age. Show result in console 
let age = prompt( "How old are you?", 1 );

function countAge() {
    return new Date().getFullYear() - age;
}

console.log( countAge() );



// Creating a class and an object:
// Create a class Person with name and age properties.
// Create an object from this class with name "John" and age 30.

// Class methods:
// Extend the Person class, add a sayHello method that outputs a message with a greeting and the person's name.

class Person {
    constructor ( name, age ) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return ` Hello ${this._name} `
    }
}


let user = new Person( "John", 30 );

console.log(user);
console.log( user.sayHello() );



// Imitation:
// Create a Student class that inherits from the Person class.
// Add the studentId property to the Student class.
// Add a study method that displays a message about the student's study.
class Students extends Person {
    constructor ( name, age, studentId, subject ) {
        super( name, age );
        this._studentId = studentId;
        this._subject = subject;
    }
    study() {
        return ` The student ${ this._name } is study ${this._subject} `;
    }
}

let mali = new Students( "Mali", 24, "1865489", "JS" );
console.log(mali);
console.log(mali.sayHello());
console.log(mali.study());



// Create a function that receives an array and filters it by books that were released after 2000
const books = [
    { author: 'J.K. Rowling', title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    { author: 'George R.R. Martin', title: 'A Game of Thrones', year: 1996 },
    { author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring', year: 1954 },
    { author: 'Dan Brown', title: 'The Da Vinci Code', year: 2003 }
];

function sortByValue( arr, value ) {
    return arr.sort( ( a, b ) => a[value] - b[value] )
}
console.log( sortByValue(books, "year" ) );



// Create a function that increases the salary of all employees in the array by 10% and a function that sorts employees by salary level
const employees = [
    { name: 'John', age: 28, salary: 3000 },
    { name: 'Jane', age: 32, salary: 4000 },
    { name: 'Peter', age: 24, salary: 2500 },
    { name: 'Mark', age: 30, salary: 3500 }
];

function increaseWageByTen ( arr ) {
    let res = [ ...arr ];
    res.forEach( item => item.salary = parseInt( item.salary*1.1 ) );
    return res;
}

let incrArr = increaseWageByTen( employees );

sortByValue( incrArr, "salary" );

console.log( incrArr );
