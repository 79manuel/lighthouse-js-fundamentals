const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

//The user can use ctrl + c to exit the program, at which point the program
// should say "Thanks for using me, ciao!" before terminating
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write(`thanks for using me! Ciao" \n`);
    process.exit();
  }
  //The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07')
  }
  //The user can input any number from 1 to 9 and it should
  // immediately output "setting timer for x seconds...", and
  // beep after that number of seconds has passed
  if(key > '0' && key <= '9') {
    process.stdout.write(`Setting Timer for ${key} seconds... \n`);
    setTimeout(() => {
      process.stdout.write('\x07')
    }, key * 1000);
  }
});


