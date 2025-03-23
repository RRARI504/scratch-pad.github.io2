// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){
        return true;
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
/*
I: a value
O: a boolean value based off if the value is a
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'object' && value != null && !Array.isArray(value) && !(value instanceof Date)){
        return true;
        //condtional statement that checks if an object is an object and not null and not an array and not an instance of Date.
    }else{
        return false;
    }
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/*
I: a value 
O: a boolean value of true based on if the input value is either an array or object
C:
E:
*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'object' && value != null && !(value instanceof Date)){
         return true;  
    } else if(Array.isArray(value)){
        return true;
    }else{
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
/*
I: an input value which represents the typeof data structure
O: a string value of the type of data structure 
*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
   if(value === null){
    return 'null';
   }else if(Array.isArray(value)){
    return 'array'
   }else if(value instanceof Date){ 
    return 'date';
    }else{
        return typeof value;
    }
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}