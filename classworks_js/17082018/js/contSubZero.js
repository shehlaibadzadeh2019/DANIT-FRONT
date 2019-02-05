let arr = [-5, 12, 4, -7, 2, 1, 8];
let arr2 = [-5, 12];
let arr3 = [-3, 1, 1, 5, -5, 1];

function zeroSubArrayExists(arr) {
    let m = new Map();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (m.get(sum) != undefined) {
            return true;
        }
        m.set(sum, i);
    }
    return false;
}
alert(zeroSubArrayExists(arr));
alert(zeroSubArrayExists(arr2));
alert(zeroSubArrayExists(arr3));
