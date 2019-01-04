function stringsRearrangement(inputArray) {
	return rearrange("", 0, 0, inputArray, 0, inputArray.length);
}

function rearrange(previuosWord, charIdx, wordIdx, words, count, wordsLength) {
	if (count === wordsLength) return true;
	if (words.length === 0) return false;
	const mask = getMask(previuosWord, charIdx);
	const nextElementIdx = words.findIndex((el, idx) => idx >= wordIdx && mask.test(el));
	if (~nextElementIdx) {
		let tempWords = Array.from(words);
		if (rearrange(tempWords.splice(nextElementIdx, 1)[0], 0, 0, tempWords, count + 1, wordsLength)) return true;
		if (wordIdx < words.length - 1) {
			return rearrange(previuosWord, 0, wordIdx + 1, words, count, wordsLength);
		}
	}
	if (charIdx < previuosWord.length - 1) {
		return rearrange(previuosWord, charIdx + 1, wordIdx, words, count, wordsLength);
	}
	return false;
}

function getMask(word, charNumber) {
	return word ? new RegExp(word.slice(0, charNumber)
		.concat(`[^${word.charAt(charNumber)}]`)
		.concat(word.slice(charNumber + 1))) : new RegExp(".*");
}