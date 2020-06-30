const sentence = 'Hello, this is Manuel Perez Cabello';

let x = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },x);
  x += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
},x)

