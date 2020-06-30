const fs = require('fs');

const breedDetailsFromFile = function(breed, functionFetchData){
  console.log('breedDetailsFromFile: Calling readFile...');
  console.log('-----------------------------------------');
  fs.readFile(`./data/${breed}.txt`, 'UTF8', (error, data) => {
    setTimeout(() => {
      console.log('In readFile\'s Callback: it has the data.');
      console.log('-----------------------------------------');
    }, 2000);
    if(!error) {
      setTimeout(() => {
        functionFetchData(data);
      },1000);
    }
  })
};

const printOutCatBreed = (breed) => {
  console.log('Return value:', breed);
  console.log('-----------------------------------------');

}

breedDetailsFromFile('Bombay', printOutCatBreed);