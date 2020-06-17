const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const delay = 200;
const timeout = delay * array.length

const animation = setInterval(() => {
  for (let i = 0; i < array.length; i++){
    setTimeout(() => {
      process.stdout.write(`\r ${array[i]}   `);
    }, delay * i)
  }
}, timeout);

setTimeout(() => {
  clearInterval(animation);
  process.stdout.write('\n');
}, 4000);
