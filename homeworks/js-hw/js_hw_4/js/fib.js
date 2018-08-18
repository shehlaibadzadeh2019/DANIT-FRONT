'use strict'

function getFib(n) {
    return n >= 0 ? getFibPositive(n) : getFibPositive(n * -1) * Math.pow(-1, n * -1 + 1);
}

function getFibPositive(n, a = 0, b = 1) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return a + getFibPositive(--n, b, a + b);
}

console.log(getFib(+prompt("Please enter the number to calculate Fibonacci:")));
