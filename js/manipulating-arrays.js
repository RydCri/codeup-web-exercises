"use strict";


// ============================= Adding and Removing Elements

/*

    // The following array methods change the original array value!

    someArray.push()    = adds new last element
    someArray.pop()     = removes last element
    someArray.unshift() = adds new first element
    someArray.shift()   = removes first element

 */

// const pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];
//
//// push - new element goes to end
//
//     pies.push('Vanilla');
//     console.log(pies);
//
//// pop - last element removed
//
//     console.log(pies);
//     var x = pies.pop();
//     console.log(x);
//     pies.pop();
//     console.log(pies);
//     console.log(x);
//     console.log(pies);
//     pies.pop();
//     console.log(pies);
//
//// unshift - adds element to front of array
//
//     pies.unshift('vanilla');
//     console.log(pies);
//
//
//// shift - removes element front of array
//
//     const removedFirstElement = pies.shift();
//     console.log(removedFirstElement);
//     console.log(pies);




// ============================= !! MINI-EXERCISE 1 !!

/*
    1. Create an array the string elements 'April', 'May', 'June'
    2. Add 'July' in the correct place of the array
    3. Add 'March' in the correct place of the array
    4. July is too hot; remove it from the array.
    Console log the result and verify you get ['March', 'April', 'May', 'June']
 */
//const months = [
//'April',
//'May',
//'June',
//];
//months.push('July');
//months.unshift('March');
//months.pop();
//console.log(months);
// ============================= Slicing

// RETURNS A SUB ARRAY COPY OF THE ORIGINAL

/* SYNTAX

   someArray.slice(startingIndex, startingIndexNotIncluded);

   // one argument only will return a copy from the starting index to the end of the array

 */

// const pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];
//
// console.log(pies.slice(0, 2));


// ** create a function that takes in an array of pies baked and return the 3 most recently baked pies




// ============================= Copying Array Values

// const x = [1, 2, 3];
// const y = x;
// const z = y;
// console.log(x)
// console.log(y)
// x.push(4);
// console.log(x);
// console.log(y);
// console.log(z);


// Copies the array values
// const x = [1, 2, 3];
// const y = x.slice();
// x.push('hello');
// console.log(x);
// console.log(y);




// ============================= Sorting
//
// const pies = [
//     "apple",
//     "rhubarb",
//     "key lime",
//     "cherry",
//     "huckleberry"
// ];
//


// pies.sort(); // change the original value
// console.log(pies);

// custom sorting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// const numbers = [1, 11, 2, 5];
// function compareNumbers(a, b) {
//     return a - b;
// }
// numbers.sort(compareNumbers);
// console.log(numbers);


// ============================= Reversing
//
// const pies = [
//     "apple",
//     "huckleberry",
//     "cherry",
//     "rhubarb",
//     "key lime"
// ];



// pies.sort().reverse(); // change the original value
// console.log(pies);



// ============================= Split / Join

// splitting string into and array

// const names = "Bob,Sally,Mary";
// const namesArr = names.split(" ");
// console.log(namesArr);


// const namesString = namesArr.join("");
//
// console.log(namesString);


// splitting on an empty string

// const everyCharacter = bondsString.split("");

// joining array into a string

// const bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
// const bondsString = bondsArray.join("");
// console.log(bondsString);


//
//
// let output = "";
// for (var i = 0; i < bondsArray.length; i += 1) {
//     output += bondsArray[i];
//     output += ", ";
// }
//
// console.log(bondsString);


// ============================= !! MINI-EXERCISE 2 !!

/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores



// ============================= (EXTRA INFO) Splicing Elements

/*

    someArray.splice(param1, param2, param3...);

    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array

 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);





// ============================= WRITING FUNCTIONS WITH ARRAYS

// var pies = [
//     "apple",
//     "tasty cherry",
//     "tasty key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// Create a function, getTastyPies, that takes in an array of strings and returns an array of strings that start with "tasty"

// function getTastyPies(pies) {
//     var tastyPies = [];
//     pies.forEach(function(pie) {
//         if (pie.startsWith("tasty")) {
//             tastyPies.push(pie);
//         }
//     });
//     return tastyPies;
// }
//
// console.log(getTastyPies(pies));
// console.log(pies);



// ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.



    const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    function cleanPhoneNumbers(nums){
    var split = nums.split('-').join('')
    console.log(split)
    }
    cleanPhoneNumbers(phoneNumbers);

//    the above code should output the following...
//
//       2105552020
//       2305552020
//       5125553030
//

// const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';





