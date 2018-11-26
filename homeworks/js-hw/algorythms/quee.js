'use strict'
        
function putInLighterStack(element, stacks) {
    stacks[minStack(stacks)] += element;
}

function minStack(stacks) {
    return stacks.findIndex(element => element === Math.min(...stacks));
}

function buildStacks(numberOfStacks) {
    return new Array(numberOfStacks).fill(0);
}

function distribute(elements, stacks) {
    elements.sort((x, y) => y - x)
        .forEach(element => putInLighterStack(element, stacks));
    return stacks;
}

function calculateRunTime(elements, numberOfStacks) {
    return Math.max(...distribute(elements, buildStacks(numberOfStacks)));
}

let test = calculateRunTime([1, 3, 10, 3], 2);
console.assert(test === 10, {
    result: test,
    error: "something went wrong!"
});
test = calculateRunTime([1, 2, 3, 4, 5], 1);
console.assert(test === 15, {
    result: test,
    error: "something went wrong!"
});
test = calculateRunTime([1, 2, 3, 4, 5], 2);
console.assert(test === 8, {
    result: test,
    error: "something went wrong!"
});
test = calculateRunTime([1, 2, 3, 4, 5], 5);
console.assert(test === 5, {
    result: test,
    error: "something went wrong!"
});

const elements = [1, 3, 10, 3];
const numberOfStacks = 2;
console.log(calculateRunTime(elements, numberOfStacks));