"use strict";

let Simple = {
    simples: [],
    index: 0,

    restIsZero: function (orig, idx) {
        return (orig % this.simples[idx]) == 0;
    },

    toBeAnalyzed: function (idx, max) {
        return this.simples[idx] <= max;
    },

    isSimple: function (num) {
        if (num==1) return false;
        if (num==2) return true;
        let maxToAnalyze = Math.floor(Math.sqrt(num));
        for (let idx = 0; idx < this.index; idx++) {
            if (this.toBeAnalyzed(idx, maxToAnalyze) && this.restIsZero(num, idx)) {
                return false;
            }
        }
        return true;
    },

    array: function () {
        for (let i = 1; i <= this.max; i++) {
            if (this.isSimple(i)) {
                this.simples[this.index++] = i;
            }
        }
        let min_index = 0;
        if (this.min > 1) {
            for (let i = 0; i < this.index; i++) {
                if (this.simples[i] >= this.min) {
                    min_index = i;
                    break;
                }
            }
        }
        return this.simples.slice(min_index, this.index);
    }
}

function isValidPair (min, max) {
    return getNaturalNumberOrFalse(min) && 
    getNaturalNumberOrFalse(max) && 
    isMinMaxOrder(min, max);
}

function  init (min, max){
    let simple = Object.create(Simple);
    simple.min = min;
    simple.max = max;
    simple.array();
    return simple;
};

function printAllSimples (start, end) {
    if (start < simples[0] || end > simples [simples.length - 1]){

    }
    for (let i = start; i <= end; i++) {
        if (isSimple(i)) {
            console.log(i);
        }
    }
}

let m, n;
let askedTimes = 0;
let invitation = "The 1st operand must be less than the 2nd one!";
while (!isValidPair(m, n)) {
    if (askedTimes++ > 0){
        console.error(invitation + " Please try again...");
    }
    [m, n] = promptNUsrInputs(invitation, 2);
}

init(m, n).array().forEach(e => console.log(e));

