// function pigLatin (string){
//   let splitString = string.split(" ");
//   for (let i = 0; i < splitString.length; i++) {
//     let splitSubStrings = splitString[i].split("");
//     splitSubStrings.push(splitSubStrings.splice(0, 1) [0]);
//     let joinSubStrings = splitSubStrings.join("") + "ay";
//     console.log(joinSubStrings.concat());
//   }
// }

// pigLatin("pig latin");

// const originalWords = process.argv;
// let pigLatinWords = [];
//
// for (let i = 0; i < originalWords.length; i++) {
//   pigLatinWords.push(translateToPigLatin(originalWords[i]));
// }
//
// console.log(pigLatinWords.join(' '));
//
// function translateToPigLatin(word) {
//   return word.slice(1, word.length) + word[0] + "ay";
// }


const originalWords = process.argv.slice(2);
let pigLatinWords = [];

function pigLatinTranslator(word){
  return word.slice(1, word.length) + word[0] + 'ay';
}

for (let i = 0; i < originalWords.length; i++){
  pigLatinWords.push(pigLatinTranslator(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

