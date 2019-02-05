describe('calculateInnerCellDistance', function () {
  it('should return > 0 val ', function () {
    chai.expect(calculateInnerCellDistance(0.4, 0.9)).to.equal(0.7);
  });
});

describe('calculateInnerCellDistance', function () {
  it('should return 0 val ', function () {
    chai.expect(calculateInnerCellDistance(1, 3)).to.equal(0);
  });
});

describe('calculateInnerCellDistance', function () {
  it('should return 0.2 val for 1.1 and 0.9 ', function () {
    chai.expect(calculateInnerCellDistance(0.9, 1.1)).to.equal(0.2);
  });
});

describe('calculateIntCellDistance', function () {
  it('should return calculateIntCellDistance of arguments ', function () {
    chai.expect(calculateIntCellDistance(1, 3)).to.equal(2);
  });
});

describe('calculateIntCellDistance', function () {
  it('should return calculateIntCellDistance of arguments ', function () {
    chai.expect(calculateIntCellDistance(0.4, 0.9)).to.equal(0);
  });
});

describe('perfectCity', function () {
  it('perfectCity mian method: returns 2.7 for [0.4, 1],  [0.9, 3] input ', function () {
    chai.expect(perfectCity([0.4, 1],  [0.9, 3])).to.equal(2.7);
  });
});
