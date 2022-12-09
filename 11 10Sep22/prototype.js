// let UserName = function (name, count) {
//     this.name = name;
//     this.count = count;
//     this.getCourseCount = function () {
//         console.log (`The Course Count is ${this.count}`)
//     };
// };

// let userOne = new UserName ("Raj Ratan", 8);
// userOne.getCourseCount();


// Adding New Method => getName inside UserName -

// UserName.prototype.getName = function () {
//     console.log(`The User Name is : ${this.name}`);
// }

// userOne.getName();



// Prototyple Inheritance

let objOne = {
    fullName: "Raj Ratan",
    address: "Bihar",
    getName: function () {
        console.log(this.fullName + "...." + this.address);
    },
};

let objTwo = {
    fullName: "Aman",
};


// I want to get- getName method from objOne to objTwo =>

objTwo.__proto__ = objOne

console.log(objTwo);
objTwo.getName();