'use strict';

function promptSingleUsrInput(invitation) {
    let usrInput = prompt(invitation);
    if (usrInput != null) {
        if (usrInput = getNaturalNumberOrFalse(usrInput)) {
            return usrInput;
        } else {
            console.error("Wrong number format! Try again!");
            usrInput = promptSingleUsrInput(invitation);
            return usrInput;
        }
    }
    throw new Error("User canceled!");
}


function getNaturalNumberOrFalse(usrInput) {
    if ((usrInput = Number(usrInput)) && Number.isInteger(usrInput) && usrInput >= 1) {
        return usrInput;
    }
    return false;
}

function isMinMaxOrder(min, max) {
    return min < max;
}

function promptNUsrInputs(invitation = "", numberOfOperands = 1) {
    let res = [];
    let usrPrompt;
    for (let i = 0; i < numberOfOperands; i++) {
        usrPrompt = promptSingleUsrInput(invitation = buildInvitation(invitation, numberOfOperands, i, usrPrompt));
        res.push(usrPrompt);
    }
    return res;
}

function buildInvitation(invitation, numberOfOperands, iteration, lastUsrPrompt) {
    let endOfLine = invitation ? "\n" : "";
    lastUsrPrompt = lastUsrPrompt ? " -> {" + lastUsrPrompt + "}" : "";
    let invitationLines = invitation.split(/\n/);

    if (invitationLines.length > 5) {
        invitationLines.splice(1, invitationLines.length - 4, "...");
    }

    let newLine = lastUsrPrompt + endOfLine + "Please input operand " + (iteration + 1) +
        " of " + numberOfOperands + " operands:";
    return invitationLines.join("\n").concat(newLine);
}
