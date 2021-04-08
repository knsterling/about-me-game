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

'use strict'

let answer1 = confirm("Where did you get your degree?")
if (answer1 === true) {
    // console.log("cau.")
} else {
    alert("Nope, that's not it.");
}

let answer2 = confirm("What is your employment field?")
if (answer2 === true) {
    console.log("broadcast media.")
} else {
    alert("Nope, that's not it.");
}

let answer3 = confirm("Are you originally from San Pablo?")
if (answer3 === true) {
    console.log("No.")
} else {
    alert("From the city by The Bay.");
}

let answer4 = confirm("How long have you been doing television?")
if (answer4 === true) {
    console.log("21 years.")
} else {
    alert("Nope, that's not it.");
}

let answer5 = confirm("Are you intrigued by how computers and software work?")
if (answer5 === true) {
    console.log("yes.")
} else {
    alert("Read biography again.");
}

function myFunction() {
    var person = prompt("What is your name?");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}