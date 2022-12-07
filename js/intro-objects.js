//Create a few beverage objects and assign values to each object for the following properties:
//  - brandName
//  - type
//  - volumeInLiters
//  - priceInCents
//  - expirationDate
//  - datesOfPreviousSips (use an array of strings)
//  - isOpen
//Define your objects using both literal syntax to create all properties and
//values at once and also try defining empty objects and assign property values in
//separate statements using the dot notation.

//const beverages = {
//brandName:'Pepsy',
//type:'brown',
//volumeInLiters:'2l',
//priceInCents:.80,
//expirationDate:'22-11-22',
//datesOfPreviousSips:'12-2-22',
//isOpen:true
//}
//console.log(beverages);

 const users = [
       {
           givenName: 'Sam',
           age: 21
       },
       {
           givenName: 'Cathy',
           age: 34
       },
       {
           givenName: 'Karen',
           age: 43
       }
   ];

  // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
//users.forEach(val => {
//  console.log(val.givenName);
//});
  // 2. Change the names of all users to "John Doe"
//users.forEach(function(user){
//user.givenName = ('John Doe')
//console.log(users)});
  // 3. Increase the current age of all users by 1
//users.forEach(function(user,age){
//user.age += 1
//console.log(users);
//})
  // Can you accomplish each step using iteration?
//users.forEach(function(user){
//user.givenName = ('John Doe')
//let result = user.age += 1;
//
//console.log(user)
//})
//
//  // Extras...
//    // log the total of all the ages
//    // log the average age of all users
//    // log all the user information in the following format...
