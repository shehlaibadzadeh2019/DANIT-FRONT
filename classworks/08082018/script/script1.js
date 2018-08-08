//Ask the user to enter a number
//If the user provides a non-numeric value (such as “abc”), display an error message and ask the user to try again
//Hint: use the function isNaN() to check if the conversion to number failed

function getUsrInput(){
    return prompt("Please insert a number...");
}

let usrInput = getUsrInput();

while (usrInput != null) {
    if (isNaN(new Number(usrInput))) {
        console.error("Wrong input format! Please try again...");
        usrInput = getUsrInput();
    }
    else {
        console.log(usrInput);
    }
}
