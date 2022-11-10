// Arrow Function

//Examples
// 1

// let abc = () => {
//     console.log("Hello World");
// };
// abc();

// 2

// let twoNumber = (x,y) => {
//     console.log(x,y);
// }

// twoNumber(14, 12);

// 3

// let two = () => console.log("Hello");
// two();

// 4

// let twoNumber = (x,y) => console.log(x,y);
// twoNumber(123, 321);



// Make a Program of Sum of numbers using Arrow Function

const sumOfAll = (...args) => {
    let sum = 0;
    for (let element of args) {
        sum = sum + element;
    }
    return sum;
}

let holdValue = sumOfAll (1,2,3,4,5,6,7,8,9);
console.log(holdValue);