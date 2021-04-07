'use strict'
// if conditional based confirm command
let answer1 = confirm('Are you ready to rumble?')

if (answer1 === true) {
    console.log('Let\'s get ready to rumble!')
} else {
    console.log('it\'s above me now.')
}

// logical operator
let myBool = true;
let anotherBool = false;
let thirdBool = true;

if (myBool && thirdBool) {
    console.log('myBool and thirdBool were both true');
} else if (myBool || anotherBool) {
    console.log('myBool or anotherBool was true!');
} else if (thirdBool) {
    console.log('myBool and anotherBool were false, but thirdBool was true.')
} else {
    console.log('were any of my variables true, cuh?');
}

let color = prompt('what is your favorite color?');

// convert the variable color to lower case to evaluate it
switch (color.toLowerCase()) {
    case 'red':
        console.log('your favorite color was red!');
        // break statememt  follows each case to 'break' th loopo not needed if return is present
        break;
    case 'blue':
        console.log('your favorite color was blue!');
        break;
    default:
        console.log('I don\'t know what your favorite color was.');
}