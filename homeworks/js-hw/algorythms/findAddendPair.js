const testArr = [3, 6, 1, 2, 7, 5, 5];
const n = 10;
let lastEl;

function findAddendPair(numbers, sum) {
	for (let i = 0; i < Math.floor(sum / 2); i++) {
		let indexX;
		if (~(indexX = numbers.findIndex(x => x === i))) {
			let indexY;
			if (~(indexY = numbers.findIndex((y, curIdx) => curIdx !== indexX && y + i === sum))) {
				lastEl = numbers[indexY];
				numbers = numbers.slice(0, Math.max(indexX, indexY) + 1); // cut the tail
			} else {
				numbers = numbers.filter(x => x !== i); // filter unbinded operands
			}
		}
	}
	return [Math.abs(sum - lastEl), lastEl];
}

console.dir(`Input: ([${testArr}], ${n}) Output: ${findAddendPair(testArr, n)}`);

//tests
console.assert(
	[3, 7].every(testValue => findAddendPair([3, 6, 1, 2, 7, 5, 5], 10)
	.some(result => result === testValue)), {
	testResult: findAddendPair([3, 6, 1, 2, 7, 5, 5], 10),
	errorMsg: 'invalid result!'
});
console.assert(
	[7, 2].every(testValue => findAddendPair([8, 7, 2, 1], 9)
	.some(result => result === testValue)), {
	testResult: findAddendPair([8, 7, 2, 1], 9),
	errorMsg: 'invalid result!'
});
