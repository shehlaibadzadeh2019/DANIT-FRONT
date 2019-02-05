let myMenuOpener = document.querySelector("#dropDownMenu");
myMenuOpener.addEventListener("click", showMenu);

function showMenu(){
let menu = document.querySelector("#menu");
setTimeout(function() {menu.style.opacity = 1}, 0);
}