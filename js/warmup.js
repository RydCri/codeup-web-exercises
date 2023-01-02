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


function returnLastTwoChars(input) {
return input.substring(input.length - 2);
}
console.log(returnLastTwoChars("cat")); // returns ‘at’
console.log(returnLastTwoChars('hello')); // returns ‘lo’
console.log(returnLastTwoChars('hi')); // returns ‘hi’


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