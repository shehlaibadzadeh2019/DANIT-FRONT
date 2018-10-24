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

//TODO: copy of objects without props
let str = {val:5};
let date = new Date();
let origin = {
    g: str,
    g_date: date,
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
//                        deep_str: str,
//                        deep_dat: date,
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
console.log(origin);
str = {val:0};
//str.val = 0;
console.log(str);
date = new Date(2001, 0, 1);
console.log(origin);

