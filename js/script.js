'use strict';

/* (1) The 'let' keyword restricts access/scope of a variable to a code block: */

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