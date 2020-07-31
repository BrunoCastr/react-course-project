// arguments object - no longer bound with arrow functions

const add = (a ,b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55,1,1000));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived ()  {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
       //this.cities.forEach((city) => {
       //     console.log(this.name + 'has live in ' + city);
       //});
    }
};
console.log(user.printPlacesLived());

const multipler = {
    numbers : [1,2,3,4,5,6],
    multiplyBy : 2,
    multiplyer (){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multipler.multiplyer());
