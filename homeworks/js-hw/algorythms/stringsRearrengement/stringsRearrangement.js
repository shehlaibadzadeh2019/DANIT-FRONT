let stringsRearrangement = (inputArray) => rearrange("", 0, 0, inputArray);

function rearrange(previuosWord, charIdx, wordIdx, words) {
	if (words.length === 0) return true;
	const mask = previuosWord ? new RegExp(previuosWord.slice(0, charIdx)
			.concat(`[^${previuosWord.charAt(charIdx)}]`)
			.concat(previuosWord.slice(charIdx + 1))) : new RegExp(".*");
	const nextWordIdx = words.findIndex((el, idx) => idx >= wordIdx && mask.test(el));
	if (~nextWordIdx) {
		let tempWords = Array.from(words);
		if (rearrange(tempWords.splice(nextWordIdx, 1)[0], 0, 0, tempWords)) return true;
		if (wordIdx < words.length - 1) return rearrange(previuosWord, 0, wordIdx + 1, words);
	}
	if (charIdx < previuosWord.length - 1) return rearrange(previuosWord, charIdx + 1, wordIdx, words);
	return false;
}