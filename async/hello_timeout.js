function timeout () {
  process.stdout.write('Hello ');
  setTimeout(() => {
    process.stdout.write('there ');
  }, 1500);
  setTimeout(() => {
    process.stdout.write('World ');
  },3000);
  setTimeout(() => {
    process.stdout.write('\n');
  }, 3500);
}

timeout();