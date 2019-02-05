//Create a <div> that turns into <textarea> when clicked
//The textarea allows to edit the text in the <div>
//When the textarea looses focus, it turns back into <div>, and its content becomes  the HTML in <div>

/* Make the div and the textarea the same size */

'use strict';

function editDivToTextArea() {
    let toReplace = event.target;
    let newTextArea = document.createElement("TEXTAREA")
    newTextArea.innerHTML = toReplace.innerHTML;  
    newTextArea.addEventListener("blur", editTextAreaToDiv);
    toReplace.parentElement.replaceChild(newTextArea, toReplace);
}

function editTextAreaToDiv() {
    let toReplace = event.target;
    let newDiv = document.createElement("DIV")
    newDiv.innerHTML = toReplace.value;
    newDiv.className = "edit";
    newDiv.addEventListener("click", editDivToTextArea);
    toReplace.parentElement.replaceChild(newDiv, toReplace);
}

let divEl = document.querySelectorAll(".edit");

for (let e of divEl){
    e.addEventListener("click", editDivToTextArea);
}