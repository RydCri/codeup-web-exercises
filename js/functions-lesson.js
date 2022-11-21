//let userName = prompt("What is your name?");
//let message = myFunction(userName);
fight("Billy","Bob");
console.log(message);
function myFunction(name){
   return "Thank you, " + name + ". You have ran myFunction";
}

function fight(person1, person2){
    console.log(person1 + " punched " + person2 + " right in the kisser.");
}

function isEven(num){
    let number = num;
    let answer = (number % 2 == 0);
    return answer;
}