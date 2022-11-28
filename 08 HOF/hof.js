// Higher Order Function
    // call back function - when function call a function is called Call back Function.

// let isEven = (ele) => {
//     return ele % 2 === 0;
// };

// let value = [2,4,6,8].every(isEven);
// console.log(value);


// Mini Programe

// function to Square

// const callBack = (n) => {
//     return n ** 2;
// };

// function to multiply square with other number 

// function cube (callBack,n) {
//     return callBack (n) * n;
// };
// console.log(cube(callBack,3));


// set Timeout 

// function course () {
//     console.log("Welcome to Fullstack Js Web dev Bootcamp");
// }
// setTimeout (course, 3000);


// 

// setTimeout (() => {
//     console.log("Hello Raj");
// }, 3000);


// setInterval

// setInterval (() => {
//     console.log("Hello");
// },3000);    

// it will repeat after 3000 milisecond
// to come out from this program = ctrl + c


// ForEach - is a part of Higher Order Function (HOF) bcz it is taking function inside it.
// for each always repeat over a Array using Function.
// Functional Programing

// Note- It look like loop but it can't be a loop
    //  we can't say ForEach is a loop
    

// let arr = ["Hey", "hi", "hello", "hola", "Namaste"];

// arr.forEach((val) => {
//     console.log(val);
// });


// MAP
//
let number = [1, 2, 3, 4, 5, 6];
let store = number.map ((num) => num * num);
console.log(store);

//
let names = ["Raj ratan", "Raj kamal", "amit", "rahul"];
let store1 = names.map ((nam) => nam.toUpperCase());
console.log(store1);