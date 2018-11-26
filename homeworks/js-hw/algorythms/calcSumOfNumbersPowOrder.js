'use strict'

function calcSumOfNumbersPowOrder(num){
	return new Array(num > 0 ? (Math.floor(Math.log10((num)))+1) : 0)
	.fill(Math.floor(Math.log10(num))+1)
	.reduce((accum, NumLength, idx) => {
		accum += Math.pow(num%10, NumLength - idx);
		num = Math.floor(num/10)
		return accum;
	},0);
}

console.assert(calcSumOfNumbersPowOrder(0) === 0,	{testResult: calcSumOfNumbersPowOrder(0), errorMsg: 'invalid result!'});
console.assert(calcSumOfNumbersPowOrder(89) === 89,	{testResult: calcSumOfNumbersPowOrder(89), errorMsg: 'invalid result!'});
console.assert(calcSumOfNumbersPowOrder(100) === 1,	{testResult: calcSumOfNumbersPowOrder(100), errorMsg: 'invalid result!'});
console.assert(calcSumOfNumbersPowOrder(101) === 2,	{testResult: calcSumOfNumbersPowOrder(101), errorMsg: 'invalid result!'});
console.assert(calcSumOfNumbersPowOrder(593) === 113,	{testResult: calcSumOfNumbersPowOrder(113), errorMsg: 'invalid result!'});
console.assert(calcSumOfNumbersPowOrder(222) === 14,	{testResult: calcSumOfNumbersPowOrder(14), errorMsg: 'invalid result!'});

console.dir(`89:${calcSumOfNumbersPowOrder(89)}`);