const countdownGenerator = function (x) {
  /* your code here */
  return function(){
    let z = x
    x--;
    if(z === 0){
      console.log("Blast Off!")
    } else if(z === -1 || z === -2){
      console.log("Rockets already gone, bub!")
    } else {
      console.log(`T-minus ${z}`);
    }
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!