'use strict';

//et arr be an array
//Create a function unique(arr) that should return an array with unique items of arr
//Use set to make the function more efficient

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["John", "Harry", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];  

alert(unique(values)); 

// John, Harry, Mary, Beth