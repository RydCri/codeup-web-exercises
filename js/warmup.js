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
