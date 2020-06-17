function helloTimeout () {
  console.log('4311o')
  setTimeout(() => {
    console.log('th3r3');
  }, 2000);
  setTimeout(() => {
    console.log('w0r1d');
  }, 3000);
}

helloTimeout();