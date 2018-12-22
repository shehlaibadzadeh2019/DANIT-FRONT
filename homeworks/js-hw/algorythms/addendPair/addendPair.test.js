describe('findAddendPair', function () {
  it('should return [3, 7] ', function () {
    chai.expect(findAddendPair([3, 6, 1, 2, 7, 5, 5], 10)).to.deep.equal([3, 7]);
  });
});

describe('findAddendPair', function () {
  it('should return [7, 2] ', function () {
    chai.expect(findAddendPair([8, 7, 2, 1], 9)).to.deep.equal([7, 2]);
  });
});
