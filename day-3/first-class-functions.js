// #!/usr/bin/env node

'use strict';

const { identity } = require("lodash");

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
/*
I: a base which can be a number or a string
O: a function that test if a vale is greater than the base
C:
E:
*/
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        if(value > base){
            return true
        }else{
            return false;
        }

    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
/*
I: a base that can be a string or number
O: should return a function that tests if a given value is less than the base.
*/
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
  return function(value){
    if(value < base){
        return true
    }else{
        return false;
    }

  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
/*
I: a character which is a single character 
O: a function that test whether a given string start with the input startsWith
C:
E:
*/
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    let lower  = startsWith.toLowerCase(); 
    //made a variable lower that makes fucntion case insensitive
    return function(string){ //returns a function that takes in a string
        return string.toLowerCase().startsWith(lower)
        //function returns the input string lowecased for case sensitivity
        //and checks if string starts with the 'lower' character

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    let lower = endsWith.toLowerCase();
    return function(string){
        return string.toLowerCase().endsWith(lower)

    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
/*
I: an array of strings and a function that modifies a string
O: the array of strings modified 
C
E
the function takes an array of strings and a funciton which modifys the strings
we need to return a new array with the strings modifyed.
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    let collection = [];//empty array to hold modified strings

    for(var i = 0; i < strings.length; i++){//iterate over the strings length
        collection.push(modify(strings[i]))
        //apply modify function to each string in the array and push
        // the results to the output array.
    }
    return collection;



    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
/*
I: an array of strings and a function that test the strings in some way 
O: returns a boolean based on if the test passed, return true if all strings pass.
C:
E:
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
       for(var i = 0; i <= strings.length; i++){
            let answer = test(strings[i])
            if(answer !== strings[i]){
                return false;
            }

       }
       return true;
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}