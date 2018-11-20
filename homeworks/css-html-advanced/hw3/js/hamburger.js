'use strict';
/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing, menues) {

    //ISSUE: all defualt burgers die in case if a custom menu appeares: 
    // possible solutions: 1. add more reciepes to Humberger
    // 2. Make recipe instance and then construct humberger from it. -- better 

    // TODO: not writable - put to menu
    var MAX_TOPPINGS = 2;


    //TODO: make default menu instead of methods
    if (!this.__proto__.getDefaultMenuSizes) {
        Object.defineProperty(this.__proto__, "getDefaultMenuSizes", {
            value: function () {
                return {
                    [this.constructor.SIZES.SIZE_SMALL]: {
                        name: this.constructor.SIZES.SIZE_SMALL,
                        price: 50.00,
                        calories: 20
                    },
                    [this.constructor.SIZES.SIZE_LARGE]: {
                        name: this.constructor.SIZES.SIZE_LARGE,
                        price: 100.00,
                        calories: 40
                    },
                };
            },
            enumerable: true,
            writable: false,
            configurable: false,
        });
    }

    if (!this.__proto__.getDefaultMenuStuffings) {
        Object.defineProperty(this.__proto__, "getDefaultMenuStuffings", {
            value: function () {
                return {
                    [this.constructor.STUFFINGS.STUFFING_CHEESE]: {
                        name: this.constructor.STUFFINGS.STUFFING_CHEESE,
                        price: 10.00,
                        calories: 20
                    },
                    [this.constructor.STUFFINGS.STUFFING_SALAD]: {
                        name: this.constructor.STUFFINGS.STUFFING_SALAD,
                        price: 20.00,
                        calories: 5
                    },
                    [this.constructor.STUFFINGS.STUFFING_POTATO]: {
                        name: this.constructor.STUFFINGS.STUFFING_POTATO,
                        price: 15.00,
                        calories: 10
                    },
                };
            },
            writable: false,
            configurable: false,
            enumerable: false,
        });
    }

    if (!this.__proto__.getDefaultMenuToppings) {
        Object.defineProperty(this.__proto__, "getDefaultMenuToppings", {
            value: function () {
                return {
                    [this.constructor.TOPPINGS.TOPPING_MAYO]: {
                        name: this.constructor.TOPPINGS.TOPPING_MAYO,
                        price: 15.00,
                        calories: 0
                    },
                    [this.constructor.TOPPINGS.TOPPING_SPICE]: {
                        name: this.constructor.TOPPINGS.TOPPING_SPICE,
                        price: 20.00,
                        calories: 5
                    },
                }
            },
            writable: false,
            configurable: false,
            enumerable: false,
        });
    }

    //TODO: add custom menu to default menu, remove menu, 
    function Menu(menues) {

        var OBLIGATORY_MENUES = ["SIZES", "STUFFINGS", "TOPPINGS"];
        var OBLIGATORY_MENU_FIELDS = ["price", "name", "calories"];

        function isValid(menu) {
            return OBLIGATORY_MENUES.every(function (obligMenu) {
                var menuIdx = Object.getOwnPropertyNames(menu).indexOf(obligMenu);
                return menuIdx !== -1 && OBLIGATORY_MENU_FIELDS.every(function (obligField) {
                    return Object.keys(menu[obligMenu]).every(function (menuItem){
                        return Object.keys(menu[obligMenu][menuItem]).indexOf(obligField) !== -1;
                    });
                });
            });
        }

    // TODO: mutiple menues
        if (menues) {
            if (isValid(menues)) {
                Object.defineProperty(this.__proto__, "MENU", {
                    value: menues,
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
            } else {
                throw new HamburgerException("Wrong menu!");
            }
        }
    };

    if (!this.__proto__.getMenuSizes) {
        Object.defineProperty(this.__proto__, "getMenuSizes", {
            value: function () {
                return this.__proto__.MENU ? this.__proto__.MENU.SIZES : this.getDefaultMenuSizes();
            },
            enumerable: true,
            writable: false,
            configurable: false,
        });
    }

    if (!this.__proto__.getMenuStuffings) {
        Object.defineProperty(this.__proto__, "getMenuStuffings", {
            value: function () {
                return this.__proto__.MENU ? this.__proto__.MENU.STUFFINGS : this.getDefaultMenuStuffings();
            },
            enumerable: true,
            writable: false,
            configurable: false,
        });
    }

    if (!this.__proto__.getMenuToppings) {
        Object.defineProperty(this.__proto__, "getMenuToppings", {
            value: function () {
                return this.__proto__.MENU ? this.__proto__.MENU.TOPPINGS : this.getDefaultMenuToppings();
            },
            enumerable: true,
            writable: false,
            configurable: false,
        });
    }

    function HamburgerException(message) {
        this.__proto__ = new Error(message);
        this.message = message;
    }

    function includedInMenu(burgerProperty) {
        var container = this;
        return Object.keys(container).some(function (menuItem) {
            return container[menuItem].name === burgerProperty;
        });
    }

    function isValidStuffing(stuffing) {
        return includedInMenu.call(this.getMenuStuffings(), stuffing);
    }

    function checkStuffing(stuffing) {
        if (!isValidStuffing.call(this, stuffing)) {
            throw new HamburgerException(`Wrong stuffing ${stuffing}!`);
        }
    }

    function isValidSize(size) {
        return includedInMenu.call(this.getMenuSizes(), size);
    }

    function checkSize(size) {
        if (!isValidSize.call(this, size)) {
            throw new HamburgerException(`Wrong size ${size}!`);
        }
    }

    function construct(size, stuffing) {
        Menu.call(this, menues);
        checkSize.call(this, size);
        checkStuffing.call(this, stuffing);
        Object.defineProperties(this, {
            size: {
                value: this.getMenuSizes()[size],
                writable: false,
                configurable: false,
                enumerable: true,
            },
            stuffing: {
                value: this.getMenuStuffings()[stuffing],
                writable: false,
                configurable: false,
                enumerable: true,
            },
            toppings: {
                value: {
                    quantity: 0,
                    topping1: null,
                    topping2: null,
                },
                writable: false,
                configurable: true,
                enumerable: true,
            },
        });
    };

    function hasVacantToppings() {
        return this.quantity < MAX_TOPPINGS;
    }

    function isInMenu(topping) {
        return includedInMenu.call(this.getMenuToppings(), topping);
    }

    function findInBurger(component, container) {
        return container.quantity > 0 &&
            Object.keys(container).slice(1).reduce(function (accum, key) {
                return container[key] !== null && container[key].name === component ? key : "";
            }, "");
    }

    function findVacantSpace(container) {
        return hasVacantToppings.call(container) &&
            Object.keys(container).slice(1).reduce(function (accum, key) {
                return container[key] === null ? key : "";
            }, "");
    }

    if (!this.__proto__.addTopping) {
        Object.defineProperty(this.__proto__, "addTopping", {
            value: function (topping) {
                var vacantTopping;
                if (isInMenu.call(this, topping) && (vacantTopping = findVacantSpace(this.toppings)) &&
                    !findInBurger(topping, this.toppings)) {
                    this.toppings[vacantTopping] = this.getMenuToppings()[topping];
                    this.toppings.quantity++;
                    return true;
                } else {
                    throw new HamburgerException("Error during adding that topping!");
                }
            },
            writable: false,
            configurable: false,
            enumerable: true,
        });
    }

    if (!this.__proto__.removeTopping) {
        Object.defineProperty(this.__proto__, "removeTopping", {
            value: function (topping) {
                var seatInBurger;
                if (this.toppings.quantity > 0 && (seatInBurger = findInBurger(topping, this.toppings))) {
                    this.toppings[seatInBurger] = null;
                    this.toppings.quantity--;
                    return true;
                } else {
                    throw new HamburgerException("Error during removing that topping!");
                }
            },
            writable: false,
            configurable: false,
            enumerable: true,
        });
    }

    // this.__proto__.getToppings = function () {
    //     return this.toppings.slice(1);
    // }

    // this.__proto__.getSize = function () {
    //     return this.size;
    // }

    // this.__proto__.getStuffing = function () {
    //     return this.stuffing;
    // }

    // this.__proto__.calculatePrice = function () {
    //     return this.getStuffing().price + this.getSize().price +
    //         function (burger) {
    //             var costOfToppings = 0;
    //             for (var topping of burger.getToppings()) {
    //                 costOfToppings += topping.price;
    //             }
    //             return costOfToppings;
    //         }(this);
    // }
    //TODO: хранить массивы объектов с названием, ценой и калорийностью для размера, начинки и топингов.
    //создавать/добавлять/удалять по названиям констант

    construct.call(this, size, stuffing);
}

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

//CONSTANTS
Hamburger.SIZES = {
    SIZE_SMALL: "SIZE_SMALL",
    SIZE_LARGE: "SIZE_LARGE",
};

Hamburger.STUFFINGS = {
    STUFFING_CHEESE: "STUFFING_CHEESE",
    STUFFING_POTATO: "STUFFING_POTATO",
    STUFFING_SALAD: "STUFFING_SALAD",
};

Hamburger.TOPPINGS = {
    TOPPING_MAYO: "TOPPING_MAYO",
    TOPPING_SPICE: "TOPPING_SPICE",
};

//MENU FOR FLEXIBLE RECIPES
var menues = {
    SIZES: {
        SIZE_MEDIUM: {
            name: "SIZE_MEDIUM",
            price: 500.00,
            calories: 200
        },
    },
    STUFFINGS: {
        STUFFING_CHICKEN: {
            name: "STUFFING_CHICKEN",
            price: 100.00,
            calories: 200
        },
        STUFFING_PORK: {
            name: "STUFFING_PORK",
            price: 100.00,
            calories: 200
        },
    },
    TOPPINGS: {
        TOPPING_KETCHUP: {
            name: "TOPPING_KETCHUP",
            price: 150.00,
            calories: 10
        },
    }
};

var hamburger1 = new Hamburger(Hamburger.SIZES.SIZE_LARGE, Hamburger.STUFFINGS.STUFFING_CHEESE);
var hamburger2 = new Hamburger(Hamburger.SIZES.SIZE_SMALL, Hamburger.STUFFINGS.STUFFING_POTATO);
var hamburger3 = new Hamburger(Hamburger.SIZES.SIZE_SMALL, Hamburger.STUFFINGS.STUFFING_SALAD);
var custom = new Hamburger(menues.SIZES.SIZE_MEDIUM.name, menues.STUFFINGS.STUFFING_CHICKEN.name, menues);