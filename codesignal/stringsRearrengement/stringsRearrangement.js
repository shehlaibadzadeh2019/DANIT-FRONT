let stringsRearrangement = (words, previuosWord="", charIdx=0, wordIdx=0) => {
	if (words.length === 0) return true;
	    const mask = previuosWord ? new RegExp(previuosWord.slice(0, charIdx)
			.concat(`[^${previuosWord.charAt(charIdx)}]`)
			.concat(previuosWord.slice(charIdx + 1))) : new RegExp(".*");
	    const nextWordIdx = words.findIndex((el, idx) => idx >= wordIdx && mask.test(el));
	if (~nextWordIdx) {
            if (stringsRearrangement (words.filter((w, i) => i != nextWordIdx), words[nextWordIdx], 0, 0)) return true;
		    if (wordIdx < words.length - 1) return stringsRearrangement(words, previuosWord, 0, wordIdx + 1);
	}
	if (charIdx < previuosWord.length - 1) return stringsRearrangement(words, previuosWord, charIdx + 1, wordIdx);
	return false;
}