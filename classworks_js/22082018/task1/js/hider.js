let hider = document.querySelector("#hider");
hider.addEventListener("click", hideShow);
//document.querySelector("#text").style.display === "block"
document.querySelector.parent.style.display = "block";

function hideShow() {
    if (document.querySelector("#text").style.display === "block") {
        document.querySelector("#text").style.display = "none";
    } else {
        document.querySelector("#text").style.display = "block";
    }
}

let hidingButton = document.querySelector("#hiding-button");
hidingButton.addEventListener("click", hideButton);

function hideButton() {
    console.dir(arguments);
    event.target.style.display = "none";
}
