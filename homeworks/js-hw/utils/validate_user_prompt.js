function promptSingleUsrInput(invitation){
    let usrInput = prompt(invitation);
    if (usrInput != null){
       if (usrInput = getNaturalNumberOrFalse(usrInput)){
        return usrInput;
        }else {
            console.error("Wrong number format! Try again!");
            usrInput = promptSingleUsrInput(invitation);
            return usrInput;
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

function promptNUsrInputs(invitation, numberOfOperands) {
    let res = [];
    for (let i = 0; i < numberOfOperands; i++){ 

        res.push(promptSingleUsrInput(collectInvitation(invitation, numberOfOperands, i));
    }
    return res;
}

function collectInvitation (invitation, numberOfOperands, iteration){
    let newLine;
    let lastLine = invitation.substring(invitation.length - );

    if (iteration > 5){
        invitation = invitation.
    }

    return invitation += (i > 0 ? " - ok" : "") + 
        "\nPlease input operand " + 
        (i + 1) + " of " + 
        numberOfOperands + 
        " operands:";
}
