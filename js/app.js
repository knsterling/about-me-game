// 'use strict'
// // if conditional based confirm command
// let answer1 = confirm('Are you ready to rumble?')

// if (answer1 === true) {
//     console.log('Let\'s get ready to rumble!')
// } else {
//     console.log('it\'s above me now.')
// }

// // logical operator
// let myBool = true;
// let anotherBool = false;
// let thirdBool = true;

// if (myBool && thirdBool) {
//     console.log('myBool and thirdBool were both true');
// } else if (myBool || anotherBool) {
//     console.log('myBool or anotherBool was true!');
// } else if (thirdBool) {
//     console.log('myBool and anotherBool were false, but thirdBool was true.')
// } else {
//     console.log('were any of my variables true, cuh?');
// }

// let color = prompt('what is your favorite color?');

// // convert the variable color to lower case to evaluate it
// switch (color.toLowerCase()) {
//     case 'red':
//         console.log('your favorite color was red!');
//         // break statememt  follows each case to 'break' th loopo not needed if return is present
//         break;
//     case 'blue':
//         console.log('your favorite color was blue!');
//         break;
//     default:
//         console.log('I don\'t know what your favorite color was.');
// }

// 'use strict'

// let answer1 = confirm("Where did you get your degree?")
// if (answer1 === true) {
//     // console.log("cau.")
// } else {
//     alert("Nope, that's not it.");
// }

// let answer2 = confirm("What is your employment field?")
// if (answer2 === true) {
//     console.log("broadcast media.")
// } else {
//     alert("Nope, that's not it.");
// }

// let answer3 = confirm("Are you originally from San Pablo?")
// if (answer3 === true) {
//     console.log("No.")
// } else {
//     alert("From the city by The Bay.");
// }

// let answer4 = confirm("How long have you been doing television?")
// if (answer4 === true) {
//     console.log("21 years.")
// } else {
//     alert("Nope, that's not it.");
// }

// let answer5 = confirm("Are you intrigued by how computers and software work?")
// if (answer5 === true) {
//     console.log("yes.")
// } else {
//     alert("Read biography again.");
// }

// function myFunction() {
//     var person = prompt("What is your name?");
//     if (person != null) {
//         document.getElementById("demo").innerHTML =
//             "Hello " + person + "! How are you today?";
//     }
// }
let userPoints = 0




// let frisco = cityBorn.shift();

// console.log("shift array value", san francisco)

// let index = cityBorn.indexOf("san franciso")
// console.log("errraaayy!", index)


// Question 1
let question1 = prompt("Where did kafele go to college", "CAU or Morehouse")
console.log(question1)

let goToCollege = ["CAU"]
console.log(goToCollege.length)

for (let i = 0; i < goToCollege.length; i++) {
    console.log(goToCollege[i])
}
goToCollege.push("CAU")


// Question 2
let question2 = prompt("What is Kafele's professional field?")
console.log(question2)

let professionalField = ["broadcast tv"]
console.log(professionalField.length)

for (let i = 0; i < professionalField; i++) {
    console.log(professionalField[i])
}
professionalField.push("broadcast tv")


// Question 3
let answer3 = prompt("Is kafele from san pablo?", "yes or no")
console.log(answer3)

let cityBorn = ["san francisco"]
console.log(cityBorn.length)

for (let i = 0; i < cityBorn.length; i++) {
    console.log(cityBorn[i])
}
cityBorn.push("san francisco")



// / Question 4
let question4 = prompt("Has kafele been in broadcast for 22 years?", "yes or no")
console.log(question4)

let fieldDuration = ["no"]
console.log(fieldDuration.length)

for (let i = 0; i < fieldDuration.length; i++) {
    console.log(fieldDuration[i])
}
fieldDuration.push("no")


// / Question 5
let question5 = prompt("Was he intrigued by how computers look and function?", "yes or no")
console.log(question5)

let whyPivot = ["yes"]
console.log(whyPivot.length)

for (let i = 0; i < whyPivot.length; i++) {
    console.log(whyPivot[i])
}
whyPivot.push("yes")


// Question 6
let userAnswer = '';
let limit = 6;
let numGuesses = 0;
while (userAnswer !== '11' && numGuesses < limit) {
    userAnswer = prompt('What number am I thinking between 1 and 20?');
    numGuesses++
}
alert('you have ' + 6 + ' points.')