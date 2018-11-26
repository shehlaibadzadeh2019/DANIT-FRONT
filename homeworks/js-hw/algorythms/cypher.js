function cypher(str) {
    return str.split('')
        .reduce((accum, char, idx) => {
            accum[idx % 2] += char
            return accum;
        }, ["", ""])
        .join([])
}

function cypherMultipleTimes(str, iterations) {
    return new Array(iterations)
        .fill(0)
        .reduce((accum) => cypher(accum), str);
}

const str = "abababababab";

let times = 1;
let test = cypherMultipleTimes(str, times);
console.assert(test === "aaaaaabbbbbb", {
    result: test,
    error: "something went wrong!"
});

times = 5;
test = cypherMultipleTimes(str, times);
console.assert(test === "aabababababb", {
    result: test,
    error: "something went wrong!"
});

console.log(cypherMultipleTimes(str, times));
