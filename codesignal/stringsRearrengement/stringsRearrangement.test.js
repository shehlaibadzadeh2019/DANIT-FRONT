let i = 1;

describe(`stringsRearrangement`,  () => {
  it(`test${i++} input: ["aba","bbb","bab"] => false `,  () =>
    chai.assert.isFalse(stringsRearrangement(["aba","bbb","bab"]))
  );
  it(`test${i++} input: ["ab", "bb", "aa"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["ab", "bb", "aa"]))
  );
  it(`test${i++} input: ["q", "q"] => false `,  () =>
    chai.assert.isFalse(stringsRearrangement(["q", "q"]))
  );
  it(`test${i++} input:["zzzzab", "zzzzbb", "zzzzaa"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["zzzzab", "zzzzbb", "zzzzaa"]))
  );
  it(`test${i++} input: ["ab", "ad", "ef", "eg"] => false `,  () =>
    chai.assert.isFalse(stringsRearrangement(["ab", "ad", "ef", "eg"]))
  );
  it(`test${i++} input:["abc", "bef", "bcc", "bec", "bbc", "bdc"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["abc", "bef", "bcc", "bec", "bbc", "bdc"]))
  );
  it(`test${i++} input: ["abc", "abx", "axx", "abc"] => false `,  () =>
    chai.assert.isFalse(stringsRearrangement(["abc", "abx", "axx", "abc"]))
  );
  it(`test${i++} input:["abc", "abx", "axx", "abx", "abc"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["abc", "abx", "axx", "abx", "abc"]))
  );
  it(`test${i++} input:["f", "g", "a", "h"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["f", "g", "a", "h"]))
  );
  it(`test${i++} input:["ff", "gf", "af", "ar", "hf"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["ff", "gf", "af", "ar", "hf"]))
  );
  it(`test${i++} input:["a", "b", "c"] => true `,  () =>
    chai.assert.isTrue(stringsRearrangement(["a", "b", "c"]))
  );
});