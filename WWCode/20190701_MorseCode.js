/**
 * @param {string[]} words
 * @return {number}
 */

const morseChars = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

let uniqueMorseRepresentations = function(words) {
  const aAscii = 'a'.charCodeAt();
  console.log(`ASCII code for a is ${aAscii}`);

  let toRet = 0,
      morseSet = new Set([]);

  for (let word of words) {
    let morseString = '';
    // let morseString = [];

    console.log(word);

    for (let char of word) {
      const morseIndex = char.charCodeAt() - aAscii;
      morseString += morseChars[morseIndex];
      // morseString.push(morseChars[morseIndex]);
    }
    // morseString.join('');
    morseSet.add(morseString);
    
    console.log(morseSet);
  }

  return morseSet.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2