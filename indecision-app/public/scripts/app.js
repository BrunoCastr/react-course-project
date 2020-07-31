'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1000));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        //this.cities.forEach((city) => {
        //     console.log(this.name + 'has live in ' + city);
        //});
    }
};
console.log(user.printPlacesLived());

var multipler = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiplyer: function multiplyer() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multipler.multiplyer());
