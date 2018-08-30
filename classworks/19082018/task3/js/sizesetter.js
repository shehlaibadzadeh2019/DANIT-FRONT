//аписать универсальную функцию. которая получает ссылку на элемент, название свойства, размер которого нужно изменить, значение, на которое нужно изменить, и единицы измерения (px, % и т.д.)

function sizeChange (element, property, value){  
    element.style[property] = value + ((element.style[property]).replace(/\d+/, "") || "px");
    return true;
}

let id = "text-container";
let element = document.getElementById(id);
console.log(element);
sizeChange (element, "width", "500");