// New - New is a Keyword

// let person = {
//     name: "Raj Ratan",
// };

// console.log(person);

// New 
// example 1

// let person = new Object();

// person.name = "Raj Ratan";
// console.log(person);

// 2

var person = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
};

var aman = new person ("Aman", 4);
console.log(aman);

var raj = new person ("Raj", 6);
console.log(raj);