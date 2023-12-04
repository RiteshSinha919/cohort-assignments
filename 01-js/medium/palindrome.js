/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newString = str.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()?\[\]'"|<>\\+@]/g,"");
  
  let size = newString.length;
  for(let i = 0; i < size; i++){
      if(newString[i] === newString[size - i - 1]){
        continue;
      }else{
        return false;
      }
  }
  return true;
}

module.exports = isPalindrome;
