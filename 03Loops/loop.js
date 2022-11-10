// Loops - we do repeatition using loop

// Syntax-  for (initialization; condition; increment/decrement) {
                    //code
            // }

//Examples
//1

// let i;       // or for (let i=0; i<5; i++)

// for (i=0; i<5; i++) {
//     console.log(i);
// }

//2

// let i;

// for (i=0; i<5; i++) {
// console.log(`${i}`);
// }

//3

// for (let i=0; i<5; i++) {
//     console.log(i);
// }


// A program to find square of each no. from 1 to 5 using loop through interpolation method

// for (let i=1; i<=5; i++) {
//     console.log(`${i} * ${i} = ${i*i}`);            // `${i} * ${i} = ${i*i}` - this is called interpolation method
// }

// result -   
//1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25


// A small program using loop for Array

// Create Array country - India, Sweden, Norway, Iceland
// Create newArray
//Push country name into newArray all in uppercase

// let country = ["India", "Swden", "Norway", "Iceland"];
// let newArray = [];

// for (let i=0; i<country.length; i++) {
//     newArray.push (country[i].toUpperCase());
// }

// console.log(newArray);


// While loop

// let i=0;

// while (i<5) {
//     console.log(i);
//     i= i+1;         // or i++
// };

// Do While Loop

// let i=0;

// do {
//     console.log(i);
//     i++;
// }   while (i<5);


// NOTE:-   FOR LOOP and WHILE LOOP = it will check first then run
//          DO WHILE LOOP = loop will run minimum one time then check


// For Of loop

//example
//1

// let country = ["India", "Sweden", "Norway", "Iceland"];

// for (let cont of country) {
//     console.log(cont);
// };


//print first letter of each country name

// let country = ["India", "Sweden", "Norway", "Iceland"];

// for (let cont of country) {
//     console.log(cont[0]);
// };

//example 2

// let num = [1, 2, 3, 4, 5];
// for (let number of num) {
//     console.log(number);
// };


// Break and Continue

// Break

// for (let i=1; i<5; i++) {
//     if (i==3) {
//         break;
//     }
//     console.log(i);
// };

// result-
// 1
// 2

// Continue

// for (let i=1; i<=5; i++) {
//     if(i==3) {
//         continue;
//     }
//     console.log(i);
// };

// result -
// 1
// 2
// 4
// 5