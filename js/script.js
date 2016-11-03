'use strict';

/* (1) The 'let' keyword restricts access/scope of a variable to a code block:

let movie = 'Good Will Hunting';

function theNotebook() {
    let movie = 'The Notebook';
    return movie;
}

console.log(movie); // Good Will Hunting
console.log(theNotebook()); // The Notebook
console.log(movie); // Good Will Hunting

function otherFunction() {
    let isHorse = true;
    let saying = 'Bacon is good'; // Bacon is good
    console.log('\nBefore if: ', saying);

    if (isHorse) {
        let saying = 'I am a horse';
        console.log('\nInside if: ', saying); // I am a horse
    }
    console.log('\nAfter if: ', saying);
}

otherFunction(); // Bacon is good
*/


/* (2) Arrow functions: 

function circleArea1(r) { // Old non-arrow way of doing it
    const PI = Math.PI.toFixed(4);
    return PI * r * r;
}

let circleArea2 = (r) => { // Fat arrow
    const PI = Math.PI.toFixed(4);
    return PI * r * r;
}

let circleArea3 = r => Math.PI.toFixed(4) * r * r; // Fat arrow shorthand

console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));
*/


/* (3) Template literals: 

let name = 'John';
let a = 10;
let b = 1;

console.log('Hi, I\'m John'); // Old way
console.log(`Hi, I'm ${name}`); // Template literals
console.log('My favourite number is ' + (a + b));
console.log(`My favourite number is ${a + b}`); // Can interpolate (but not best practice)

console.log(`

This is a

multi-line
test.
`); // Template literals can print over multiple lines without compromising format
*/


/* (4) Spread operator:

function addNumbers(a, b, c) {
    console.log(a + b + c);
}

let nums = [3, 4, 5];

addNumbers(nums[0], nums[1], nums[2]); // Old way
addNumbers(...nums); // Spread operator

let meats = ['bacon', 'ham'];
let food = ['apples', ...meats, 'kiwi', 'rice']; // Easy way of inserting array into another

console.log(food);
*/


/* (5) Classes: 

class Person {
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight() {
        console.log(this.weight);
    }
}

let bucky = new Person('Bucky', 87, 6650);
let sally = new Person('Sally', 21, 89);

bucky.displayWeight();
sally.displayWeight();
*/


/* (6) Inheritence: */

class Person { // super class/parent class
    constructor(name, age, weight) {
        this._name = name;
        this._age = age;
        this._weight = weight;
    }

    displayName() {
        console.log(this._name);
    }

    displayAge() {
        console.log(this._age);
    }

    displayWeight() {
        console.log(this._weight);
    }
}

class Programmer extends Person { // sub class/child class
    constructor(name, age, weight, language) {
        super(name, age, weight);
        this._language = language;
    }

    displayLanguage() {
        console.log(this._language);
    }
}

let sally = new Person('Sally', 21, 89);
sally.displayName();
sally.displayWeight();
sally.displayAge();

console.log('------------');

let bucky = new Programmer('Bucky Roberts', 87, 987, 'JavaScript');
bucky.displayName();
bucky.displayWeight();
bucky.displayAge();
bucky.displayLanguage();