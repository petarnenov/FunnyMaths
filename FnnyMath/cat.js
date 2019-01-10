var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = "";
        this.name = name;
        Cat.count++;
    }
    Cat.prototype.walk = function () {
        console.log('ï,m walking');
    };
    Cat.count = 0;
    return Cat;
}());
for (var i = 0; i < 10; i++) {
    var cat1 = new Cat("misha");
}
console.log(Cat.count);
