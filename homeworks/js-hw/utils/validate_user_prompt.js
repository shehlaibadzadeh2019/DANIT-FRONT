function promptSingleUsrInput(invitation){
    let usrInput = prompt(invitation);
    if (usrInput != null){
       if (usrInput = getNaturalNumberOrFalse(usrInput)){
        return usrInput;
        }else {
            console.error("Wrong number format! Try again!");
            usrInput = promptSingleUsrInput(invitation);  
        } 
    }
    // console.error("User canceled!");
    // return false;
    throw new Error("User canceled!");
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

function promptNUsrInputs(n) {
    let res = [];
    for (let i = 0; i < n; i++){ 
        res.push(promptSingleUsrInput("Please input operand " + (i + 1) + " of " + n + " operands:" ));
    }
    return res;
}
