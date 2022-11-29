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

// var person = function (firstName, courseCount) {
//     this.firstName = firstName;
//     this.courseCount = courseCount;
// };

// var aman = new person ("Aman", 4);
// console.log(aman);

// var raj = new person ("Raj", 6);
// console.log(raj);




// Set - Collection of element which store unique element
// - Set only contain Unique elements

let a = [1, 2, 3, 1, 3, 2, 4, 3, 5, 3, 6, 3, 4, 1]

let num = new Set (a);
console.log(num);

num.add(8);
console.log(num);

num.delete(3);
console.log(num);


console.log(num.has(5));
console.log(num.has(9));

// for (let i of num) {
//     console.log(i);
// };

