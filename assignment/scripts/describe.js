// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a veriable called name and give it the value Dane
// then create a conditional for the variable 'name' where if 'name' is Mary then console log Hi, Mary! Will be the output. 
// If name is not Mary, then console log How do you do? name is not Mary so 
// we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret. A second variable named code is given the value of 123. We create a conditional for the value of secret: 
// if the value of code is 123 then the variable secret is given the value 'super' and variable code is multipled by 2. 
// If the value of code is greater than 250 then secret is given the value of 'duper'. code is equal to 123 so we 
// console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create 3 variables. isStudent set as true, age is 34, and zip is 55407. An else if to determine the following conditions: 
// if isStudent is true AND zip is greater than 8000 then the code will console.log 'you're a studnet on the West Coast!'
// if either of those statements are not true the code will check for if isStudent is false OR age is less than 30. if either of those statements are true then console.log 'What are your hobbies?'
// if neither of those statements are true then the code will check if isStudent is ture and console log 'Welcome to Prime!'
// and all other values will output 'How about the weather?' 
// since is true but zip < 80000, the first code block does not run. Neither of the conditionals for the second code block are true (isStudent === true and age > 30), so the second codeblock doesn't run. 
// the third conditional will run because isStudent === true. The code will console.log 'Welcome to Prime!' 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - instructions specify colorOne set to 'blue' and colorTwo set to 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - Instructions indicate that both colorOne and colorTwo to 'purple'. Add colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX -- instructions indicate that time should be a variable not a constant. Change to let time = 4
const time = 4;

//FIX instructions specify an AND conditional. Change to: if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//FIX instructions specify two variables. Change delcaration of constant to: let minAge = 21.
const minAge = 21;

// FIX really nit-picky here but instructions indicate code checks that age >= minAge. Change to: if(age >= minAge). The console logs should be changed also to reflect the output instructed. 
//FIX CONT. Since age >= minAge the console.log for this code block should be 'enter' and the else console.log should be 'no entry'. 
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

