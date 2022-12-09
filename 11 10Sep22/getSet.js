// Getter and Setter

// Getter - To get the value

// Example

class User {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get getFirstName () {
        return this.firstName;
    }
    get getLastName () {
        return this.lastName;
    }
}