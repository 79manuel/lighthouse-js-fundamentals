function encrypt (plaintext , key) {
  //1. Convert a character into number.
  // 1.a If there is a space just return the space. not the number
  let n = {};
  for (let char of plaintext) {
    // if (char === -65) {
    //   n = " ";
    // }
    n = { [char]: plaintext.charCodeAt(plaintext.indexOf(char)) - 97 + key }//2. Shift number by X digits (-97 - 3 = 100).
    let result = { [char]: String.fromCodePoint(n[char].toString())};
    console.log(result);
  }
  //3. Convert it back into a string character(string.fromChartCode).

}

encrypt("he", -3);

module.exports = { encrypt };
