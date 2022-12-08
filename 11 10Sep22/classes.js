// Classes - Classes are a template for creating Objects.
//         - Classes are in fact "Special Function"


// Example to understand class

// 1

// class User {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// let user1 = new User ("Raj", "Ratan");
// console.log(user1);
// console.log(user1.lastName);



// 2 - Method inside class


// class User {
//         constructor (firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }

//         getFullName () {
//             const fullname = this.firstName + " " + this.lastName;
//             return fullname;
//         }
//     }
    
//     let user1 = new User ("Raj", "Ratan");
//     console.log(user1.getFullName());

//     let user2 = new User ("Aman", "Kumar");
//     console.log(user2.getFullName());


// 3 - Default Value

class User {
    constructor (firstName = "JavaScript", lastName = "Web Developer") {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        const fullname = this.firstName + " " + this.lastName;
        return fullname;
    }
}

let user1 = new User ();
console.log(user1.getFullName());   // JavaScript Web Developer

let user2 = new User ("Aman", "Kumar");
console.log(user2.getFullName());