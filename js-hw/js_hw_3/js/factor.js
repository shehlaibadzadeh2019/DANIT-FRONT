function getFactorial (n){
    if (n == 0) return 1;
    return n * getFactorial (--n);
}

console.log(getFactorial(+prompt("Please enter a number to calculate its factorial:")));