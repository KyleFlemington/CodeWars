// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// Examples input/output:

function XO(str) {
    let exes = 0;
    let ohs = 0;
    for(let i = 0; i < str.length; i++) {
      if ( str[i].toLowerCase() == 'x') {
        exes++;
      } else if ( str[i].toLowerCase() == 'o') {
        ohs++;
      }
    }
   return exes === ohs
}