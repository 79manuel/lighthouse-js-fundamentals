function sumToOne(n) {
  if(n === 1){
    return 1
  } else {
    return n + sumToOne(n -1);
  }
}

console.log(sumToOne(5))

