//Create a function getSecondsToTomorrow() that returns the number of seconds till  tomorrow
//For instance, if now is 23:00, then:
//getSecondsToTomorrow() == 3600
//Note that the function should work at any day

function getSecondsToTomorrow() {
    let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setMilliseconds(0);
    return Math.round((tomorrow - Date.now()) / 1000);
}
alert(getSecondsToTomorrow());
