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
// let userPoints = 0




// let frisco = cityBorn.shift();

// console.log("shift array value", san francisco)

// let index = cityBorn.indexOf("san franciso")
// console.log("errraaayy!", index)


// Question 1
function whatCollege() {
  let kafeleCollege = window.prompt('Where did Kafele go to college?');
  if(kafeleCollege === 'toLowerCase.Clark Atlanta University') {
  //   console.log('Yes my college is', + answer1);
    alert('Yes my college is: Clark Atlanta University');
  } else {
  //   console.log('Nope!!! Try again');
    alert('Nope! PLease try again?');
  }
}
whatCollege();

// console.log(question1)

// let goToCollege = ["CAU"]
// console.log(goToCollege.length)

// for (let i = 0; i < goToCollege.length; i++) {
//     console.log(goToCollege[i])
// }
// goToCollege.push("CAU")


// // Question 2
// let question2 = prompt("What is Kafele's professional field?")
// console.log(question2)

// let professionalField = ["broadcast tv"]
// console.log(professionalField.length)

// for (let i = 0; i < professionalField; i++) {
//     console.log(professionalField[i])
// }
// professionalField.push("broadcast tv")

// Dondre Function 2
function professionalField() {
  let question2 = prompt('What is Kafele\'s professional field?');
  if(question2 === 'Broadcast Tv') {
    alert('You are cooking with grease now!!!');
  } else {
    alert('I\'m sorry but that is incorrect');
  }
}
professionalField();

// // Question 3
// let answer3 = prompt("Is kafele from san pablo?")
// console.log(answer3)

// let cityBorn = ["san francisco"]
// console.log(cityBorn.length)

// for (let i = 0; i < cityBorn.length; i++) {
//     console.log(cityBorn[i])
// }
// cityBorn.push("san francisco")

// Dondre's Question 3
function whereIsKafeleFrom() {
  let question3 = prompt('Where is Kafele from?');
  if(question3 === 'San Francisco'){
    alert('Yep! That is were I am from.');
  } else {
    alert('Nope, Guess a again.');
  }
}
whereIsKafeleFrom();

// // / Question 4
// let question4 = prompt("Has kafele been in broadcast for 22 years?")
// console.log(question4)

// let fieldDuration = ["no"]
// console.log(fieldDuration.length)

// for (let i = 0; i < fieldDuration.length; i++) {
//     console.log(fieldDuration[i])
// }
// fieldDuration.push("no")

// Dondre question 4
function broadcastingYears() {
  let question4 = prompt('Has Kafele been in broadcast for 22 years?');
  if(question4 === 'yes') {
    alert('Yes, its been a long time');
  } else {
    alert('Nope thats not right');
  }
}
broadcastingYears();


// // / Question 5
// let question5 = prompt("Was he intrigued by how computers look and function?")
// console.log(question5)

// let whyPivot = ["yes"]
// console.log(whyPivot.length)

// for (let i = 0; i < whyPivot.length; i++) {
//     console.log(whyPivot[i])
// }
// whyPivot.push("yes")

// Dondre 5th Question
function computers(){
  let question5 = prompt('Was Kafele intriguied by how many computers look and function?');
  if(question5 === 'yes') {
    alert('yes we have a winner');
  } else {
    alert('Nope, Please try again');
  }
}

computers();

// // Question 6
// let limit = 4;
// let i = 0;
// let userAnswer = prompt('What number am I thinking between 1 and 20?');
// let points = 0;
// let question6 = 11;
// while (i < 4 && userAnswer !== question6) {
//     if (userAnswer < question6) {
//         alert("Too Low");
//         userAnswer = prompt('What number am I thinking between 1 and 20?');
//     }
//     else if (userAnswer > question6) {
//         alert("Too High");
//         userAnswer = prompt('What number am I thinking between 1 and 20?');
//     }

//     else {
//         alert("Winner!");
//         points++;
//         alert("Total points " + points);
//     }
//     i++;
//     break;
// }

// Dondre Question 6
function guessingNumber() {
//   let limit = 4;
  let i = 0;
  let userAnswer = prompt('What number am I thinking between 1 and 20?');
  let points = 0;
  let question6 = 11;
  while (i < 4 && userAnswer !== question6) {
    if (userAnswer < question6) {
      alert('Too Low');
      userAnswer = prompt('What number am I thinking between 1 and 20?');
    }
    else if (userAnswer > question6) {
      alert('Too High');
      userAnswer = prompt('What number am I thinking between 1 and 20?');
    }

    else {
      alert('Winner!');
      points++;
      alert('Total points ' + points);
    }
    i++;
    break;
  }
}
guessingNumber();
