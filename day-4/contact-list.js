// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {id, 
            nameFirst, 
            nameLast
        }
    
}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
        // we implemented the length api for you //

      length: function(){
        return contacts.length;
      },
      //length(): returns the number of contacts within the list.

      addContact: function(contact){
        contacts.push(contact);
      },
      //addContact(contact): takes a contact object to be added to the 
      //contact-list.

      findContact: function(fullName){
        //takes a full-name String, like 'Max Gaudin', and 
        // returns   contact   if found in the contacts-list, or, 
         // undefined if the fullName does not match any contacts in the list
         for(var i = 0; i <= contacts.length; i++){//iterate over the name
          let contact = contacts[i]//variable sets contact object to current iteration in loop in contact list 

          if(contact.nameFirst + ' ' + contact.nameLast === fullName){
            //if contact object nameFirst and lastName = fullName 
            return contact; //returns contact object
          }else{
            return undefined;
          }
          
        }
      },

      //removeContact(contact): takes a contact object to be removed from 
     // the contact-list.
     removeContact: function(contact){
      contacts.splice(0, 1);

     },

     printAllContactNames: function(){
      var names = '' // needs to return a string so here is a variable set to an empty string to accumulate names.

      for(var i = 0; i < contacts.length; i++){//for loop the goes through the contacts contact list.
        let fullName = contacts[i].nameFirst + ' ' + contacts[i].nameLast; //variable sets fullName equal to the
        //current iteration of contact and create the full name by combining first and last.

        names += i === 0 ? fullName: '\n' + fullName;
       // condition ? expressionIfTrue : expressionIfFalse;
       //use teranary in place of iuf/else statement
       //




      }
      return names;

      
      


     }

     //  The printAllContactNames() Function should 
      //    return a String formated with all the full-names of the separated 
        //  with a line-break, like so:
          
        // myContacts.printAllContactNames(); // => Max Gaudin
          //                                         John Fraboni
            //                                       Kaelyn Chresfield
           
           //WARNING: To pass this test, the LAST full name should have NO
          //new-line character added after it!
    }           

        
}      
  
    






// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}