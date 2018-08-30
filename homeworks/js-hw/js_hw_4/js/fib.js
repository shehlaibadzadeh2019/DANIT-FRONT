'use strict'

function getFib(n) {
    return n >= 0 ? getFibPositive(n) : getFibPositive(n * -1) * Math.pow(-1, n * -1 + 1);
}


function getFibPositive(n, a = 0, b = 1) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return a + getFibPositive(--n, b, a + b);
}


//function fiboClassical(n) {
//    if (n == 0) return 0;
//    if (n == 1) return 1;
//    return fiboClassical(n - 2) + fiboClassical(n - 1);
//}

let n = +prompt("Please enter the number to calculate Fibonacci:");
console.log(getFib(n));

//benchmark
//let numbers = [10, 20, 30, 40]; 
//
//for (let n of numbers) { 
//
//
//    console.log("Fib(" + n + ") my way");
//    console.time("my way time");
//    console.log("Fib(" + n + ") = " + getFib(n));
//    console.timeEnd("my way time");
//
//    console.log("Fib(" + n + ") one parameter");
//    console.time("one parameter time");
//    console.log("Fib(" + n + ") = " + fiboClassical(n));
//    console.timeEnd("one parameter time");
//}
