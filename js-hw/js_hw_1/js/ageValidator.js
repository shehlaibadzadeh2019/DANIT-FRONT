function getUsrPrompt(invitation, typeMarker, defaultValue = "") {
    let usrInput = prompt(invitation, defaultValue);
    if (usrInput === null) {
        showRefusal();
        throw new Error("User canceled!");
    }
    if (typeMarker === "string") {
        return parseValidNameOrFalse(usrInput) || (usrInput = getUsrPrompt(invitation, typeMarker, usrInput));
    } else if (typeMarker === "number") {
        return parseValidAgeOrFalse(usrInput) || (usrInput = getUsrPrompt(invitation, typeMarker, usrInput));
    } else {
        throw new Error("Unknown typeMarker");
    }
}

function parseValidNameOrFalse(usrInput) {
    if (new RegExp("^[A-Za-z]+$").test(usrInput)) {
        return usrInput;
    } else {
        return reportWrongInputAndFalse(usrInput);
    }
}

function parseValidAgeOrFalse(usrInput) {
    if (new RegExp("^\\d+$").test(usrInput)) {
        return +usrInput;
    } else {
        return reportWrongInputAndFalse(usrInput);
    }
}

function showRefusal() {
    alert("You are not allowed to visit this website.");
}

function showWelcome(userName) {
    alert("Welcome, " + userName + "!");
}

function askConfirm() {
    return confirm("Are you sure you want to continue?");
}

function reportWrongInputAndFalse(usrInput) {
    console.error("Wrong input: " + usrInput);
    return false;
}

let name = getUsrPrompt("Please input your name", "string");
console.log("Name is: " + name);

let age = getUsrPrompt("Please input your age", "number");
console.log("Age is: " + age);

if (age < 18) {
    showRefusal();
} else if (age <= 22) {
    if (askConfirm()) {
        showWelcome(name);
    } else {
        showRefusal();
    }
} else {
    showWelcome(name);
}
