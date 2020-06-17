function settimeOut () {
  console.log('First message');
  setTimeout(() => {
    console.log('callback message');
  }, 1000);
  console.log('Second message');
}

settimeOut();
