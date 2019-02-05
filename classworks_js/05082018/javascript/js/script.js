function printEasterDate() {
    let year = parseYear(getUserInput("Please input year to get Easter"));
    printResult(calcEasterDate(year));
}

function printLeapYear() {
    let year = parseYear(getUserInput());
    let res = calcLeapYear(year) ? "Not leap!" : "Leap";
    printResult(res);
}

function getUserInput() {
    return prompt("Please enter the year...");
}

function printResult(result) {
    console.log(result);
}

function printManual() {
    console.log("You should imput year in XXXX format, whete XXXX is digits");
}

function parseYear(userInput) {
    if (!Number(userInput) || !Boolean(userInput.match(/^\d{4}$/))) {
        printManual();
        throw "Wrong number format!";
    } else {
        return Number(userInput);
    }
}

function calcEasterDate(year) {
    let f = (2 * (year % 4) + 4 * (year % 7) + 6 * ((19 * (year % 19) + 15) % 30) + 6) % 7 + (19 * (year % 19) + 15) % 30;
    year = f <= 26 ? 4 + f + " апреля" : (f - 26) + " мая";
    return year;
}

function calcLeapYear(year) {
    return year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
}

printEasterDate();
printLeapYear();
