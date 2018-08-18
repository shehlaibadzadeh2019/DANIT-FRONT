'use strict';

function deepClone(origin, copy = {}) {
    for (let prop in origin) {
        if (origin[prop] != null && typeof (origin[prop]) == "object") {
            copy[prop] = deepClone(origin[prop]);
        } else {
            copy[prop] = origin[prop];
        }
    }
    return copy;
}

let origin = {
    a: "1",
    b: "2",
    c: {
        nested: {
            name: "nested2",
            cargo: {
                name: "nested",
            }
        }
    }
}

let copy = {};
deepClone(origin, copy);
console.log(copy);
let copy2 = deepClone(origin); 
console.log(copy);
