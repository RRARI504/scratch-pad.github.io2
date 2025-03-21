// #!/usr/bin/env node

'use strict';

const { values } = require("lodash");

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/*
I: an array
O: the values in the array printed 
*/
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for(var i = 0; i < array.length; i++){
    console.log(array[i])

  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);

  }
  
  // YOUR CODE ABOVE HERE //
}






/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/*
I: an object
O: an array containing the objects keys 
C:
E:
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}










/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/*
I: an object 
O: print the input objects keys using console.log
C:
E:

*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(var keys in object){
    console.log(keys)

  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/*
I: an object 
O: print the input objects values
E:

*/
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  return Object.values(object)
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/*
I: an object 
O: the values of the input object
C:
E:
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //

  for(var values in object){ //for loop iterates over the objects values 
    if(object.hasOwnProperty(values)){
      //if statement checks if the object has a specific property as its property 
      //checked of the object has values 
      console.log(object[values])
      //used console.log to log the specific values of the object 

    }

  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I: an object 
O: a number representing the amount of key value pairs in the object 
C:
E:
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object).length
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/*
I: an object 
O: print the values of the object in reverse 
C:
E: use console.log
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  for(var i = object.length - 1; i >= 0; i--){
    //use for loop to iterate backwards
    if(object.hasOwnProperty(values)){
      console.log(object[values])

    }

  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}