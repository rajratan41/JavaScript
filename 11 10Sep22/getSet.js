// Getter and Setter

// Getter - To get the value

// Example

// class User {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get getFirstName () {
//         return this.firstName;
//     }
//     get getLastName () {
//         return this.lastName;
//     }
// }

// let user1 = new User ("Raj", "Ratan");

// console.log(user1.getFirstName);
// console.log(user1.getLastName);


// Setter = To set the Value

// Example

class User {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
    }

    // Set
    set setScore (score) {
         this.score = score;
    }
    // Get
    get getScore () {
        return this.score
    }
}

let user1 = new User ("Raj", "Ratan");

user1.score = 8;
console.log(user1.getScore);