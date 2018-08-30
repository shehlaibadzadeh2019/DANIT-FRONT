'use strict';

function deepClone(origin, copy = {}) {
    for (let prop in origin) {
        if (origin[prop] != null && typeof (origin[prop]) == "object") {
            if (Array.isArray(origin[prop])) {
                copy[prop] = Array.from(origin[prop]);
            } else {
                copy[prop] = deepClone(origin[prop]);
            }
        } else {
            copy[prop] = origin[prop];
        }
    }
    return copy;
}

let origin = {
    g: 2,
    h: [[[5]], ['gg']],
    c: {
        f: 5,
        g: [{
            g: {
                g: 5,
                h: 7,
                g: [1, {
                    g: {
                        jl: 5,
                        kl: null,
                        dd: new Date(),
                        lk: undefined,
                        ff: [],
                        rm: /.+/
                    }
                }]
            }
        }]
    },
    fn: function () {
        alert("I'm a function")
    }
}

let copy = deepClone(origin);
console.log(origin);
console.log(copy);
