//Get from the user a number
//Print to the console a square of stars whose length is the number specified by the user
//For example, if the user entered the number 15, your should print:
//
//Hint: Use the character ‘\n’ to start a new line

function getUsrInput(invitationString) {
    let usrInput = prompt(invitationString);
    if (usrInput != null) {
        if (isNaN(new Number(usrInput))) {
            console.error("Wrong input format! Please try again...");
            return getUsrInput(invitationString);
        } else {
            return new Number(usrInput);
        }
    } else {
        return null;
    }
}

function printSquare(size, sign) {
    if (size < 4) {
        console.error("Number cannot be smaller then 4! Please try again...");
        return false;
    }
    let result = "";
    for (let line = 0; line < size; line++) {
        for (let row = 0; row < size; row++) {
            if (line == 0 || line == size - 1 || row == 0 || row == size - 1) {
                result = result.concat(row == size - 1 ? sign + "\n" : sign);
            } else {
                result = result.concat(" ");
            }
        }
    }
    console.log(result);
    return true;
}

function execute() {
    let sign;
    while (!sign) {
        sign = prompt("Please enter sign...");
    }
    let size = getUsrInput("Please input size...");
    if (!printSquare(size, sign)) {
        execute();
    }
}

execute();
