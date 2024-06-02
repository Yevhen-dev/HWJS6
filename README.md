# HW6 Yevhen Chukharkin
  
Tasks: 

1) Rewrite code use let and const insted of var
for (var i = 0; i < 5; i++) {
    console.log(i);
}


2) Insted of var
var message = 'test';
function example() {
    if (true) {
        var message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}


3) Use for in to show value form object to console.log 

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

4) Use for of and for in to show value form object which is inside array

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

Task with Date.getYear:

1) Create function which return users year of birth when user tape his age. Show result in console 



Class
1) Creating a class and an object:
    Create a class Person with name and age properties.
    Create an object from this class with name "John" and age 30.

2) Class methods:
    Extend the Person class, add a sayHello method that outputs a message with a greeting and the person's name.

3) Imitation:
    Create a Student class that inherits from the Person class.
    Add the studentId property to the Student class.
    Add a study method that displays a message about the student's study.  

Additional task:

1) Create a function that receives an array and filters it by books that were released after 2000

const books = [
    { author: 'J.K. Rowling', title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    { author: 'George R.R. Martin', title: 'A Game of Thrones', year: 1996 },
    { author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring', year: 1954 },
    { author: 'Dan Brown', title: 'The Da Vinci Code', year: 2003 }
];


2) Create a function that increases the salary of all       employees in the array by 10% and a function that sorts employees by salary level

const employees = [
    { name: 'John', age: 28, salary: 3000 },
    { name: 'Jane', age: 32, salary: 4000 },
    { name: 'Peter', age: 24, salary: 2500 },
    { name: 'Mark', age: 30, salary: 3500 }
]





Practices in using arrays methods, create functions, learning OOP principles, create objects.
No issue during the working on code.