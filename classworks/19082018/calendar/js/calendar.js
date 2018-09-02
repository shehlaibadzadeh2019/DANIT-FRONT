'use strict'

function createCalendar(){
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    
    let hMonth = document.getElementById("headerMonth");
    hMonth.textContent = months[month];
    let hYear = document.getElementById("headerYear");
    hYear.textContent = year;
    
    let lastDate = new Date(year, month + 1, 0);
    let daysNum = lastDate.getDate();
    console.log(daysNum);
}


createCalendar();