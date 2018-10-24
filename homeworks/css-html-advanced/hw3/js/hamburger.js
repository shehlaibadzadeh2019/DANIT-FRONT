/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {

    /**
     * Представляет информацию об ошибке в ходе работы с гамбургером. 
     * Подробности хранятся в свойстве message.
     * @constructor 
     */
    const HamburgerException = function (message) {
        const exception = Object.create(Error);
        exception.message = message;
        exception.toString = function () {
            return this.message;
        }
        return exception;
    }

    /**
     * Возвращает объект, содержащий перечень допустимых размеров. 
     */
    if (!this.__proto__.getValidSizes){
        Object.defineProperty(this.__proto__, "getValidSizes", {
            value: function () {
                return (function () {
                    return {
                        SIZE_SMALL: "s",
                        SIZE_MEDIUM: "m",
                        SIZE_LARGE: "l"
                    };
                })();
            },
            writable: false,
            configurable: false
        });
    }

    /**
     * Возвращает объект, содержащий перечень допустимых наполнений. 
     */
    if (!this.__proto__.getValidStuffings){
        Object.defineProperty(this.__proto__, "getValidStuffings", {
            value: function () {
                return (function () {
                    return {
                        STUFFING_CHEESE: "cheese",
                        STUFFING_SALAD: "salad",
                        STUFFING_POTATO: "potato",
                        TOPPING_MAYO: "mayo",
                        TOPPING_SPICE: "spice"
                    };
                })();
            },
            writable: false,
            configurable: false
        });
    }

    /**
     * Проверяет влиность параметром конструктора. 
     */
    const isValid = function (param, validPrams) {
        for (let key of Object.keys(validPrams)) {
            if (param.toString().toLowerCase() == validPrams[key]) {
                return true;
            }
        }
        return false;
    }

    if (!isValid(size, this.getValidSizes()) || !isValid(stuffing, this.getValidStuffings())) {
        throw HamburgerException(`Wrong params ${size}, ${stuffing}!`);
    } else {
        Object.defineProperties(this, {
            size: {
                value: size,
                writable: false,
                configurable: false
            },
            stuffing: {
                value: stuffing,
                writable: false,
                configurable: false
            }
        });
    }
}

/* Размеры, виды начинок и добавок */

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 * 
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {}

/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {}

const hamburger1 = new Hamburger("s", "mayo");
const hamburger2 = new Hamburger("l", "potato");
const hamburger3 = new Hamburger("s", "cheese");

//console.dir(hamburger.getValidSizes());