//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’,  otherwise false
//The function must be case-insensitive:
//
//alert(checkSpam('buy ViAgRA now')); // true
//alert(checkSpam('free xxxxx')); // true
//alert(checkSpam("innocent rabbit")); // false
function checkSpam(str) {
    return str.toLowerCase().includes("xxx") || str.toLowerCase().includes("viagra");
}

alert(checkSpam('buy ViAgRA now')); // true
alert(checkSpam('free xxxxx')); // true
alert(checkSpam("innocent rabbit")); // false