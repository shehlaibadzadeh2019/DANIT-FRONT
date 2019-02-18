const root = { // dummy data
    "value": -29,
    "left": {
        "value": 95,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 100,
            "left": null,
            "right": null
        }
    }
};

describe(`betterOrderTraversal`, function () {
  it(`inOrder`, function () {
    chai.assert.equal(inOrder(root).toString(), [95, -29, 2, 100].toString());
  });

  it(`preOrder`, function () {
    chai.assert.equal(preOrder(root).toString(), [-29, 95, 2, 100].toString());
  });

  it(`postOrder`, function () {
    chai.assert.equal(postOrder(root).toString(), [95, 100, 2, -29].toString());
  });

    it(`betterOrderTraversal`, function () {
    chai.assert.equal(betterOrderTraversal(root).toString(), [-29, 95, 2, 100].toString());
  });
});

const rootComplicated: {
    "value": 8,
    "left": {
        "value": 10,
        "left": {
            "value": 3,
            "left": null,
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 2,
            "left": {
                "value": 9,
                "left": null,
                "right": {
                    "value": 5,
                    "left": null,
                    "right": null
                }
            },
            "right": {
                "value": 4,
                "left": null,
                "right": null
            }
        }
    },
    "right": null
};


describe(`complicatedTraversal`, function () {
  it(`inOrder`, function () {
    chai.assert.equal(inOrder1(rootComplicated).toString(), [95, -29, 2, 100].toString());
  });

});