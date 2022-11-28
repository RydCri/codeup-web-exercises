"use strict";
function isOdd(num){
if(num !== 2 % 0) {
return `it's odd`;
}
}
function isEven(num){
if(num== 2 % 0){
return `it's even`;
}
}
function identity(input){
return input;
}
function isFive(num){
if(num==5){
return true;
}
}
function addFive(num){
return num + 5;
}
console.log(isFive(5));