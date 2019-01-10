"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(customerName) {
        this.customerName = customerName;
        Customer.numOfCustomers++;
    }
    ;
    Customer.prototype.greet = function () {
        console.log(this.customerName + " Hello everyone");
    };
    Customer.prototype.info = function () {
        console.log(this.customerName);
    };
    //customerName: string = "";
    Customer.numOfCustomers = 0;
    return Customer;
}());
var c = new Customer("Pepo");
c.greet();
c.info();
var arrCustomers = [];
for (var i = 0; i < 5; i++) {
    arrCustomers.push(new Customer("Pepo" + i));
}
for (var _i = 0, arrCustomers_1 = arrCustomers; _i < arrCustomers_1.length; _i++) {
    var item = arrCustomers_1[_i];
    item.info();
}
console.log(Customer.numOfCustomers);
