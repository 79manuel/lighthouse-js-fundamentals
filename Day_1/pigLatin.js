const originalWords = process.argv.slice(2);
let pigLatinWords = [];

function pigLatinTranslator(word){
  return word.slice(1, word.length) + word[0] + 'ay';
}

for (let i = 0; i < originalWords.length; i++){
  pigLatinWords.push(pigLatinTranslator(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

