//1. Create an array of 10 foods. Write using a for loop, write logic that will log only the foods that start with a vowel. Write another solution using a forEach loop.
//2. Write a function, addEvenNums, that takes in an array of numbers and adds up only the even numbers in the array and returns the sum of the even numbers. Assume any array inputs will only contain valid number elements and be non-empty.
//3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
//‘input num in input array’ if the second argument is an element in the first argument array
//otherwise, the function should return the string ‘input num NOT in input array’ (edited)

var foods = ['plum', 'apple', 'spanikopita', 'tolberone', 'orange', 'ugli fruit', 'egg', 'alfredo', 'donut','spam']
for(var i = 0;i < foods.length; i+=1){
    if(foods[i].startsWith('a') || foods[i].startsWith('e')||foods[i].startsWith('i')||foods[i].startsWith('o')||foods[i].startsWith('u')){
    let vowelFoods = [foods[i]];
    console.log(vowelFoods.sort());
}
}