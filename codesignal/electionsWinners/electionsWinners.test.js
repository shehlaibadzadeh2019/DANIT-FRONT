describe(`electionsWinners`, function () {
    it(`test input: 2, 3, 5, 2], 3`, function () {
      chai.assert.equal(electionsWinners([2, 3, 5, 2], 3), 2);
    });
  });