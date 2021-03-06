const input = require('sync-input');

// greeting by bot
function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

// ask user for a name
function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

// guessing an age of a user
function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

// counting numbers from 0 to entered number
function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

// test for a user
function test() {
	const testQuestions =[
		"Why do we use methods?",
		"1. To repeat a statement multiple times.",
		"2. To decompose a program into several small subroutines.",
		"3. To determine the execution time of a program.",
		"4. To interrupt the execution of a program."];
	const botAnswerToUserWrongAnswer = "Please, try again.";
	const rightAnswer = testQuestions.indexOf(testQuestions[2]); // the right answer in the array testQuestions
	let i = 0; // increment for while loop
	
	console.log("Let's test your programming knowledge.");
  
	// print to the console all questions from the array
  while (i <= testQuestions.length - 1){ 
    console.log(testQuestions[i]);
    i++;
  }
	
  let userAnswer = Number(input());
  
	// check an user answer and ask again if it's wrong
	while (userAnswer != rightAnswer) {
    console.log(botAnswerToUserWrongAnswer);
	  userAnswer = Number(input());
  }

	console.log("Completed, have a nice day!");
}

// goodbye
function end() {
	console.log("Congratulations, have a nice day!");
}

greet('Aid', '2020');
remind_name();
guess_age();
count();
test();
end();
