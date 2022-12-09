// Inheritance - When any class or any object is able to access  other class, object, method is called Inheritance

class UserOne {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        const fullname = this.firstName + " " + this.lastName;
        return fullname;
    }
}

class UserTwo extends UserOne
        