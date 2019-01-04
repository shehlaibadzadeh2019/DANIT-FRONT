function stringsRearrangement(inputArray) {
	return rearrange("", 0, 0, inputArray);
}

function rearrange(previuosWord, charIdx, wordIdx, words) {
	if (words.length === 0) return true;
	const mask = getMask(previuosWord, charIdx);
	const nextElementIdx = words.findIndex((el, idx) => idx >= wordIdx && mask.test(el));
	if (~nextElementIdx) {
		let tempWords = Array.from(words);
		if (rearrange(tempWords.splice(nextElementIdx, 1)[0], 0, 0, tempWords)) return true;
		if (wordIdx < words.length - 1) return rearrange(previuosWord, 0, wordIdx + 1, words);
	}
	if (charIdx < previuosWord.length - 1) return rearrange(previuosWord, charIdx + 1, wordIdx, words);
	return false;
}

function getMask(word, charIdx) {
	return word ? new RegExp(word.slice(0, charIdx)
		.concat(`[^${word.charAt(charIdx)}]`)
		.concat(word.slice(charIdx + 1))) : new RegExp(".*");
}