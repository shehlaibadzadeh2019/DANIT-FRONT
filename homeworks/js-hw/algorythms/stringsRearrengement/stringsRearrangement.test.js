let i = 1;

describe(`stringsRearrangement`, function () {
  it(`test${i++} input: ["aba","bbb","bab"] false `, function () {
    chai.assert.isFalse(stringsRearrangement(["aba","bbb","bab"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input: ["ab", "bb", "aa"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["ab", "bb", "aa"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input: ["q", "q"] false `, function () {
    chai.assert.isFalse(stringsRearrangement(["q", "q"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["zzzzab", "zzzzbb", "zzzzaa"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["zzzzab", "zzzzbb", "zzzzaa"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input: ["ab", "ad", "ef", "eg"] false `, function () {
    chai.assert.isFalse(stringsRearrangement(["ab", "ad", "ef", "eg"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["abc", "bef", "bcc", "bec", "bbc", "bdc"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["abc", "bef", "bcc", "bec", "bbc", "bdc"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input: ["abc", "abx", "axx", "abc"] false `, function () {
    chai.assert.isFalse(stringsRearrangement(["abc", "abx", "axx", "abc"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["abc", "abx", "axx", "abx", "abc"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["abc", "abx", "axx", "abx", "abc"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["f", "g", "a", "h"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["f", "g", "a", "h"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["ff", "gf", "af", "ar", "hf"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["ff", "gf", "af", "ar", "hf"]));
  });
});

describe(`stringsRearrangement`, function () {
  it(`test${i++} input:["a", "b", "c"] true `, function () {
    chai.assert.isTrue(stringsRearrangement(["a", "b", "c"]));
  });
});

describe(`getMask`, function () {
  it(`input:abcde, 2`, function () {
    chai.assert.equal(getMask("abcde", 2).toString(), new RegExp("ab[^c]de").toString());
  });
});