function disemvowel(str) {
  let vowels = ['a','e','i','o','u','A','E','I','O','U'];
  let solution = "";
  for(i=0; i < str.length; i++) {
    if (vowels.indexOf(str.charAt(i)) === -1) {
      solution += str.charAt(i);
    }
  }
  return solution;
}


//1. Declare a function named disemvowel
//2. ES6 - Let: Declare all vowels, upper and lowercase
//3. ES6 - Let: Declare empty string, used to push vowel-less sentence
//4. Standard for loop, starts at 0, does not exceed length of string, increments by 1
//5. When looping over the string, if an indecy  This method returns -1 if the value to search for never occurs.
//6. Push any non-vowels into the emptry string solution
//9. Loop ends, return the final string
