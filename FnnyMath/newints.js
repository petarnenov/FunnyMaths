"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.info = function () {
        console.log("Name of the Animal is:" + this.name);
    };
    return Animal;
}());
exports.Animal = Animal;
var animal = new Animal("Greg");
animal.info();
