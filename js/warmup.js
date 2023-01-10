//////Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.
////
////const pets = [
////	{
////		name: 'Sparky',
////		type: 'Fish',
////		age: 4
////	},
////	{
////		name: 'Mr. Pig',
////		type: 'Cat',
////		age: 4
////	},
////	{
////		name: 'Bubba',
////		type: 'Dog',
////		age: 5
////	},
////	{
////		name: 'Pickles',
////		type: 'Dog',
////		age: 10
////	}
////
////];
////function findAverageDogAge(pets) {
////let sum = 0;
////let dogs = 0;
////pets.forEach(function(pet){
////if(pet.type === 'Dog'){
//// sum += pet.age
////   dogs++;
////}
////});
////return sum/dogs;
////}
////console.log(findAverageDogAge(pets)) // returns 7.5
//
////================================= WARM UP
//
////Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects with no pets of type 'Fish'.
//
//const pets = [
//  {
//    name: 'Sparky',
//    type: 'Fish',
//    age: 4
//  },
//  {
//    name: 'Mr. Pig',
//    type: 'Cat',
//    age: 4
//  },
//  {
//    name: 'Bubba',
//    type: 'Dog',
//    age: 5
//  },
//  {
//    name: 'Beans',
//    type: 'Dog',
//    age: 3
//  },
//  {
//    name: 'Mr. Salmon',
//    type: 'Fish',
//    age: 1
//  }
//];
//
//function PetsWithNoFish(input){
//let noFish = pets.filter(function(pet) {
//return pet.type !== "Fish";
//});
//return noFish;
//}
//
//console.log(PetsWithNoFish(pets)) // returns...

//================================= WARM UP

//Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

//const pets = [
//  {
//    name: 'Sparky',
//    type: 'Fish',
//    age: 4
//  },
//  {
//    name: 'Mr. Pig',
//    type: 'Cat',
//    age: 4
//  },
//  {
//    name: 'Bubba',
//    type: 'Dog',
//    age: 5
//  },
//  {
//    name: 'Beans',
//    type: 'Dog',
//    age: 3
//  },
//  {
//    name: 'Mr. Salmon',
//    type: 'Fish',
//    age: 1
//  }
//];
//
//function LongestPetName(pets){
//let longest = "";
//pets.forEach(function(pet){
//if (pet.name.length > longest.length) {
//    longest = pet.name;
//    }
//});
//return longest;
//}
//console.log(LongestPetName(pets)) // returns 'Mr. Salmon'

//Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.

//
//function returnLastTwoChars(input) {
//return input.substring(input.length - 2);
//}
//console.log(returnLastTwoChars("cat")); // returns ‘at’
//console.log(returnLastTwoChars('hello')); // returns ‘lo’
//console.log(returnLastTwoChars('hi')); // returns ‘hi’


//function returnLastCharsReversed(str, num) {
//return str.split('').reverse().slice(0, num).join('');
//
//}
//console.log(returnLastCharsReversed("cat", 0)) // returns ‘’
//console.log(returnLastCharsReversed("cat", 1)) // returns ‘t’
//console.log(returnLastCharsReversed("cat", 2)) // returns ‘ta’
//console.log(returnLastCharsReversed("cat", 3)) // returns ‘tac’
//console.log(returnLastCharsReversed('codeup', 1)) // returns ‘p’
//console.log(returnLastCharsReversed('codeup', 3)) // returns ‘pue’
//console.log(returnLastCharsReversed('codeup', 4)) // returns ‘pued’

//function iBeforeE(input){
//if(input.includes('ei')) {
//return input.split('ei').join('ie');
//} else {
//return input;
//}
//}
//
//
//console.log(iBeforeE('ei')); // returns ‘ie’
//console.log(iBeforeE('height')) // returns ‘hieght’
//console.log(iBeforeE('heist')) // returns ‘hiest’
//console.log(iBeforeE('toetoi')) // returns ‘thier’
//console.log(iBeforeE('theirtheir')) // returns ‘thierthier’

//Create a function, filterList, that takes a list of non-negative
//integers and strings and returns a new list with the strings filtered out.
//function filterList(array){
//return array.filter(Number);
//}
//console.log(filterList([1,2,'a','b'])); // returns [1,2]
//console.log(filterList([1,'a','b',0,15])); // returns [1,0,15]
//console.log(filterList([1,2,'aasf','1','123',123])); // returns [1,2,123]

//function zipArrays(array1,array2){
//result=[];
//for(var i = 0; i < array1.length; i++){
//result.push(array1[i])
//result.push(array2[i])
//}
//return result;
//}

//concat arrays then reorder somehow
//function zipArrays(array1,array2){
//let both = array1.concat(array2);
//both.splice(2,1);
//}

//console.log(zipArrays([], [])) // returns []
//console.log(zipArrays([1], [2])) // returns [1, 2]
//console.log(zipArrays(['a', 'b'], ['c', 'd'])) // returns... ['a', 'c', 'b', 'd']
//console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25])) // returns... [1,2,'a','b','bob', null, 'sally', 25]
const users = [
  {
    firstName: 'Justin',
    lastName: 'Reich',
    dob: '1923-01-01',
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    firstName: 'Sally',
    lastName: 'Smith',
    dob: '1935-03-11',
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    firstName: 'Fred',
    lastName: 'Smith',
    dob: '1999-01-21',
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  },
]

function getUserCredentials(input){
input.forEach(function(user){
console.log(`Username: ${user.username}  Password: ${user.password}`)
})
}

getUserCredentials(users);