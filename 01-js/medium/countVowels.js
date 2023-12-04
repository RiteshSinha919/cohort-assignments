/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newString = str.toLowerCase();
    let initialSize = str.length;
    let stringWithoutVowels = newString.replace(/[aeiou]/g,"");
    let finalSize = stringWithoutVowels.length;
    return initialSize - finalSize; 
}

module.exports = countVowels;