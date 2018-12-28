function stringsRearrangement(inputArray) {
	// let i = 0;
	// res = false;
	// while (i < inputArray.length && !res){
	// 	res = next(0, i, inputArray, 0, inputArray.length);
	// 	i++;
	// }
	// return res;
	return (next(0, 0, inputArray, 0, inputArray.length - 1, "", inputArray));
}

function next (currentCharNum, currentElementIdx, elements, currentCount, maxCount, resultingSuquence, initial){
	if (elements.length === 0) return false;
	if (currentCount === maxCount) {
		console.log(`${initial} | ${resultingSuquence} => ${elements[currentElementIdx]}`);
		return true;
	}
	const currentElement = elements[currentElementIdx];
	let mask = currentElement.split('');
	mask[currentCharNum] = `[^${currentElement[currentCharNum]}]`;
	mask = new RegExp(mask.join(''));
	//elements = elements.slice(0, currentElementIdx).concat(elements.slice(currentElementIdx + 1));
	//if (next(0, 0, elements.filter(el => mask.test(el)), currentCount+1, maxCount)) return true;
	if (elements.some(el => mask.test(el))){
		const newElements = elements.slice(0, currentElementIdx).concat(elements.slice(currentElementIdx + 1));
		if (next (0, newElements.findIndex(el => mask.test(el)), newElements, currentCount + 1, maxCount, `${resultingSuquence} => ${currentElement}`, initial)) return true;
	}
	//TODO: problem must be here
	if (currentCharNum < currentElement.length - 1) return next (++currentCharNum, currentElementIdx, elements, currentCount, maxCount, resultingSuquence, initial);
	if (currentElementIdx < elements.length - 1) return next (0, ++currentElementIdx, elements, currentCount, maxCount, resultingSuquence, initial);
	return false;
}