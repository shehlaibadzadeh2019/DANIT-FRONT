//Get from the user two numbers: min and max
//Output all the even numbers between min and max (note that min and max
//themselves might be odd numbers)
//For example, if the user enters min = 5 and max = 14, you should print the numbers  6,8,10,12,14

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

function printEven(min, max) {
    if (min > max) {
        console.error("Min cannot be smaller then max! Please try again...");
        return false;
    }
    for (let i = min; i <= max; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    return true;
}

function execute() {
    if (!printEven(getUsrInput("Please input min..."), getUsrInput("Please input max..."))) {
        execute();
    }
}

execute();
