////Create a file named break_and_continue.js in the js directory.
////Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
////Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
////Your output should look like this:
//
////
//
////
////for(var i = 1; i < 10; i++){
////let result = i ;
////console.log(result);
////}
////for(var i = 100; i >= 0; i+= -5){
////var end = i;
////console.log(end);
////}
////while(true){
////    var userPrompt = prompt(`Enter odd number greater than 1 and less than 50.`);
////        userNum = parseInt(userPrompt);
////    if(userNum % 2 == 1 && userNum <= 50 && userNum >= 1) {
////        for (let i = 1; i <= 50; i+=2) {
////            if (i === userNum) {
////                console.log(`Skipping input number ${i}`);
////                }
////             else {
////             console.log(i);
////             }
////        }
////        break;
////  }
////  }
//
//
//
//// JavaScript program to print primes smaller
//// than n using Sieve of Sundaram.
//
//// Prints all prime numbers smaller
//function SieveOfSundaram(n)
//{
//
//    // In general Sieve of Sundaram, produces
//    // primes smaller than (2*x + 2) for a number
//    // given number x. Since we want primes
//    // smaller than n, we reduce n to half
//    let nNew = (n - 1) / 2;
//
//    // This array is used to separate
//    // numbers of the form i+j+2ij from
//    // others where 1 <= i <= j
//    let marked = [];
//
//    // Initialize all elements as not marked
//    for (let i = 0; i < nNew + 1; i++)
//    marked[i] = false;
//
//    // Main logic of Sundaram.
//    // Mark all numbers of the
//    // form i + j + 2ij as true
//    // where 1 <= i <= j
//    for (let i = 1; i <= nNew; i++)
//    for (let j = i; (i + j + 2 * i * j) <= nNew; j++)
//        marked[i + j + 2 * i * j] = true;
//
//    // Since 2 is a prime number
//    if (n > 2)
//    console.log(2 + " ");
//
//    // Print other primes.
//    // Remaining primes are of
//    // the form 2*i + 1 such
//    // that marked[i] is false.
//    for (let i = 1; i <= nNew; i++)
//    if (marked[i] == false)
//        console.log(2 * i + 1 + " ");
//    return -1;
//}
//
//// Driver program
//
//        let n = 50;
//    SieveOfSundaram(n);
//
//
//function isPrime(num) {
//if(num < 2) return false;
//for (var i =2; i < num; i++) {
//    if(num%i==0)
//        return false;
//}
//return true;
//}
//for(var i = 0; i < 100; i++){
//    if(isPrime(i)) console.log(i);
//}