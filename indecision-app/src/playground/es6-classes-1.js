class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        // return 'Hi, i am ' + this.name;
        return `Hi ${this.name} !`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

};

const me = new Person('Andrew',24);

console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());