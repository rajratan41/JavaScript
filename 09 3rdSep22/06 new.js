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

// let a = [1, 2, 3, 1, 3, 2, 4, 3, 5, 3, 6, 3, 4, 1]

// let num = new Set (a);
// console.log(num);

// num.add(8);
// console.log(num);

// num.delete(3);
// console.log(num);


// console.log(num.has(5));
// console.log(num.has(9));

// for (let i of num) {
//     console.log(i);
// };


// Maps - it holds key value pair , key can be of any data type (String, Number, Boolean, Array)

// let newMap = new Map();
// console.log(newMap);

// setter - (set) = To set the Value

// newMap.set("1", "One String");
// newMap.set(1, "One Number");
// newMap.set(true, "Boolean");

// console.log(newMap);

// Differrence b/w Object and Map -  => (Fat Arrow)

// Object = {1: "One"}
// Set = {1, 2, 3, 4, 5}
// Map = { '1' => 'One String', 1 => 'One Number', true => 'Boolean' }


let city = [ ["India", "Delhi"],["Gujrat", "Surat"],["Rajasthan", "Jaipur"] ];

let newmap = new Map(city);
console.log(newmap);

// Getter - (get) = to get the value
console.log(newmap.get("India"));