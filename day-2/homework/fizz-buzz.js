// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
/*
I: a list of numbers between 1 and 100
O:  a string "fizz" for multiples of 3. a string "Buzz" for multiples of five 
//and a string "FizzBuzz" for multiples of both 3 and 5 
C:
E:

*/

function fizzBuzz(number) {
    // YOUR CODE GOES BELOW HERE //
    let results = []
  for(i = 0; i <= number.length; i++){//for loop iterates through the list of numbers
    if(number % 3 === 0 && number % 5 === 0){
        array.push( "FizzBuzz");
    }else if(number % 3 === 0){
        array.push( "Fizz");
    }else{
        return "Buzz";
    }

  } 
  return results;
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}