const readline = require('readline');
// var rl and add input and output interfaces to it
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// initialize variables
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

// answer to check with user input
let answer = num1 + num2;

// send prompts to user and get response
rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
  if (userInput.trim() == answer) {
    console.log('correct answer!');
    rl.close();
  } else {
    // loop to run until user gets correct answer
    rl.setPrompt('Wrong answer, try again \n');
    rl.prompt();

    // line is basically the listener for the user hitting the enter key
    rl.on('line', (userInput) => {
      if (userInput.trim() == answer) rl.close();
      else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect. try again \n`);
        rl.prompt();
      }
    });
  }
});

// listener for 'close' to fire and then perform the action
rl.on('close', () => {
  console.log('Correct!');
});
