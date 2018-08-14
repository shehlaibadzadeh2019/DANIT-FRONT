function promptSingleUsrInput(invitation){
    let usrInput = prompt(invitation);
    if (usrInput != null){
       if (usrInput = getNumberOrFalse(usrInput)){
        return usrInput;
        }else {
            console.error("Wrong number format! Try again!");
            usrInput = promptUsrInput(invitation);  
        } 
    }
    console.error("User canceled!");
    return false;
}

function getNaturalNumberOrFalse(usrInput){  
    if ((usrInput = Number(usrInput)) && Number.isInteger(usrInput) && usrInput >= 1){ 
            return usrInput;
    } 
    return false;
}

function isMinMaxOrder(min, max){  
    return min < max;
}

function isValidPair(min, max){
    return getNaturalNumberOrFalse (min) && getNaturalNumberOrFalse(max) && isMinMaxOrder(min, max);
}

function promptNUsrInputs(n) {
    let res = [];
    for (let i = 0; i < n; i++){
        res.push(promptSingleUsrInput("Please input operand " + i + "of " + n + " operands:" ));
    }
    return res;
}
