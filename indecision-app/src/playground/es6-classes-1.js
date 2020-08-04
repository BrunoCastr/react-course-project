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
        return `${this.name} is ${this.age} year(s) old.`;
    }

};

class Studant extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }



    getGretting(){
        let gretting = super.getGretting();
        if(this.homeLocation){
            gretting +=  ` I am visiting from ${this.homeLocation}`;
        }
        return gretting;
    }
};

const me = new Traveler('Andrew',24, 'Miami');

console.log(me.getGretting());

const other = new Studant();
console.log(other.getDescription());