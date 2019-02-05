let cells = document.getElementsByTagName("td");
let rows = document.getElementsByTagName("tr");

function changeCss(elementsArray, whichElement, propName, propVal) {

    if (!elementsArray[0].style.hasOwnProperty(propName)) {
        throw Error("Wrong porperty: " + propName);
    }

    for (let i = 0; i < elementsArray.length; i += whichElement) {
        elementsArray[i].style[propName] = propVal;
    }
}

changeCss(cells, rows.length + 1, "backgroundColor", "red");

