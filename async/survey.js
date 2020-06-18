const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer1) => {
  rl.question("What's an activity you like doing?\n", (answer2) => {
    rl.question("What do you listen to while doing that?\n", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?\n", (answer5) => {
          rl.question("Which sport is your absolute favourite?\n", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              console.log(`${answer1} likes to ${answer2} while listening to ${answer3}.\n${answer1}\'s favourite meal is ${answer4} and loves ${answer5}.\n${answer1}'s favourite sport is ${answer6} and he/she is amazing at ${answer7}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
//     Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
//     What is your superpower? In a few words, tell us what you are amazing at!

