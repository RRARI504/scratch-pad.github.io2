// #!/usr/bin/env node

'use strict';

const { lowerCase } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //

return string.length
    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
/*
I: a string parameter representing a word that is capitalized.
O: the string paramaeter lower cased. 
C:
E: Should return null if the string is undefined. 

*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    if(string === ' '){
        return null;
    }


  return string.toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/*
I: a string
O: should return the input string forced to uppercase 
C:
E:

*/
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
/*
I: a string
O: a new string of the input string with a dash where the space should be
C:
E: Must be enforced to lowercase


*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
   return string.split(' ').join("-").toLowerCase()



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
/*
I: a string and a single charachter 
O: retrun the boolean value true if string begins with the charcter 
C:
E: Needs to be case sensitive
*/
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
  return string.toLowerCase().startsWith(char.toLowerCase())
  //making sure the string is lowercased. statsWith returns boolean based on if the 
  //substring is equal to the parameter value at the beginning of the string.
  //make sure the char is lowercased 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase().endsWith(char.toLowerCase())
    //making sure the string is lowercased. statsWith returns boolean based on if the 
  //substring is equal to the parameter value at the end of the string.
  //make sure the char is lowercased 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: two strings 
O: the two input strings concatenated to one
C:
E:

*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
return stringOne + stringTwo


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
/*
I: any number of strings 
O: return the input strings joined together
C:
E:
*/
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

    return args.join('')

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: two strings
O: return the longest of the twi strings
C:
E:
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne.length >= stringTwo.length){
        return stringOne;

    } else {
        return stringTwo;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
/*
I: two strings 
O: the number 1 if the first string is higer in alphabetical order and a -1 if not.
C:
E:
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   if(stringOne === stringTwo){
    return 0;

   } else if(stringOne >= stringTwo){
    return -1

   } else{
    return 1;
   }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    if(stringOne === stringTwo){
        return 0;

    } else if(stringOne > stringTwo){
        return 1;

    } else{
        return -1;
    }




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}