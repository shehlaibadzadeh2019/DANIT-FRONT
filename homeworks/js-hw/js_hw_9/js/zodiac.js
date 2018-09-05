'use strict';

function promptBirthDate() {
    let birthDate = prompt("Please input your birthdate (dd.mm.yyyy)...");
    if (birthDate == null) {
        throw Error("User cancelled...");
    }
    if (!birthDate.match(/^[0-3][0-9]\.[01][0-9]\.\d{4}$/)) {
        alert("Input must match \"dd.mm.yyyy\" format");
        birthDate = promptBirthDate();
    }
    return birthDate;
}

function displayAgeAndZodiac(day, month, year) {
    let birthDate = new Date(year, month - 1, day);
    alert("Your age is: ".concat(calcAge(birthDate), " years."));
    alert("Your zodiac sign is: ".concat(calcSoziacSign(birthDate)));
}

function calcAge(birthDate) {
    if (Date.now() - birthDate.getTime() < 0) {
        alert("Birthdate must be not latter then current date!");
        birthDate = promptBirthDate();
    }
    let hasBirthDatePassed = (new Date().getMonth() > birthDate.getMonth()) || 
        (new Date().getMonth() == birthDate.getMonth() && 
        new Date().getDate() >= birthDate.getDate());
    return hasBirthDatePassed ? new Date().getFullYear() - birthDate.getFullYear() :
        new Date().getFullYear() - birthDate.getFullYear() - 1;
}

function calcSoziacSign(birthDate) {

    let Zodiac = function (signName, startPeriod, endPeriod) {
        this.signName = signName;
        this.startPeriod = new Date(1970, startPeriod.split(".")[1] - 1, startPeriod.split(".")[0]);
        this.endPeriod = new Date(1970, endPeriod.split(".")[1] - 1, endPeriod.split(".")[0]);

        this.constructor.prototype.isWithinPeriod = function (date) {
            return (date.getMonth() == this.startPeriod.getMonth() && date.getDate() >= this.startPeriod.getDate()) || (date.getMonth() == this.endPeriod.getMonth() && date.getDate() <= this.endPeriod.getDate());
        }

        this.constructor.prototype.toString = function () {
            return this.signName
        };

    };

    const zodiacSignes = [new Zodiac("Aries", "21.03", "19.04"),
        new Zodiac("Taurus", "20.04", "20.05"),
        new Zodiac("Gemini", "21.05", "20.06"),
        new Zodiac("Cancer", "21.06", "22.07"),
        new Zodiac("Leo", "23.07", "22.08"),
        new Zodiac("Virgo", "23.08", "22.09"),
        new Zodiac("Libra", '23.09', "22.10"),
        new Zodiac("Scorpio", "23.10", "21.11"),
        new Zodiac("Sagittarius", "22.11", "21.12"),
        new Zodiac("Capricorn", "22.12", "19.01"),
        new Zodiac("Aquarius", "20.01", "18.02"),
        new Zodiac("Pisces", "19.02", "20.03")];

    return zodiacSignes.find(el => el.isWithinPeriod(birthDate));
}
//comment
displayAgeAndZodiac(...promptBirthDate().split("."));
