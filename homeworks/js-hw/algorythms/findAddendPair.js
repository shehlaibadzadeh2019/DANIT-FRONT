"use strict";

function findAddendPair(numbers, sum) {
	for (let i = 0; i < Math.floor(sum / 2); i++) {	
		let indexX;
		if (~(indexX = numbers.findIndex(x => x === i))) {
			let indexY;
			if (~(indexY = numbers.findIndex((y, curIdx) => curIdx !== indexX && y + i === sum))) {
				numbers = numbers.slice(0, Math.max(indexX, indexY) + 1); // cut the tail
			} else {
				numbers = numbers.filter(x => x !== i); // filter unbinded operands
			}
		}
	}
	return [sum - numbers[numbers.length-1], numbers[numbers.length-1]];
}
