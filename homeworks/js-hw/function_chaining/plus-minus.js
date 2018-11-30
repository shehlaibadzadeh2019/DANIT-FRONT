'use strict'

const Calculator = function (initValue) {
		this.value = initValue;
		this.plus = plus;
		this.minus = minus;
};

function plus(n){
	return new Calculator(this ? this.value + n : n);
}

function minus(n){
	return new Calculator(this ? this.value - n : -n);
}

console.log(plus(11000).minus(2).value);
console.log(minus(1000).plus(1001).value);
console.log(minus(1100).value);
