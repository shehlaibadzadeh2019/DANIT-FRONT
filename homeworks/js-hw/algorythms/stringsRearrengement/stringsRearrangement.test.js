describe('stringsRearrangement', function () {
  it('input: ["aba","bbb","bab"] ', function () {
    chai.assert.isFalse(stringsRearrangement(["aba","bbb","bab"]));
  });
});

describe('stringsRearrangement', function () {
  it('input: ["ab", "bb", "aa"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["ab", "bb", "aa"]));
  });
});

describe('stringsRearrangement', function () {
  it('input: ["q", "q"] ', function () {
    chai.assert.isFalse(stringsRearrangement(["q", "q"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["zzzzab", "zzzzbb", "zzzzaa"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["zzzzab", "zzzzbb", "zzzzaa"]));
  });
});

describe('stringsRearrangement', function () {
  it('input: ["ab", "ad", "ef", "eg"] ', function () {
    chai.assert.isFalse(stringsRearrangement(["ab", "ad", "ef", "eg"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["abc", "bef", "bcc", "bec", "bbc", "bdc"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["abc", "bef", "bcc", "bec", "bbc", "bdc"]));
  });
});

describe('stringsRearrangement', function () {
  it('input: ["abc", "abx", "axx", "abc"] ', function () {
    chai.assert.isFalse(stringsRearrangement(["abc", "abx", "axx", "abc"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["abc", "abx", "axx", "abx", "abc"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["abc", "abx", "axx", "abx", "abc"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["f", "g", "a", "h"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["f", "g", "a", "h"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["ff", "gf", "af", "ar", "hf"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["ff", "gf", "af", "ar", "hf"]));
  });
});

describe('stringsRearrangement', function () {
  it('input:["a", "b", "c"] ', function () {
    chai.assert.isTrue(stringsRearrangement(["a", "b", "c"]));
  });
});







