//Пользователь вводит диапазон нужно вывести на экран все простые числа из этого диапазона. Простыми числами называются числа, которые имеют всего 2 делителя, то есть
//03
//делятся только на 1 и на самого себя! Пример простых чисел: 3,5,7,11,13,17,...

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

function isSimple(number) {
    if (Math.abs(number) <= 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function execute() {
    let number = getUsrInput("Please enter number to check...");
    for (let i = 0; i <= number; i++) {
        if (isSimple(i)) {
            console.log(i);
        }
    }
}

execute();
