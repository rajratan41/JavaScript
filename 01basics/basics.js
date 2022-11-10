// let arr1 = ["value1", 25, "aman", true];
// console.log(arr1[0]);

// Program for user Registration
// let userName = "learncodeonline";
// let full_Name = "Raj Ratan";
// const eMail = "abc@gmail.com";
// let Phone_Num = 432143535;
// let pass = "qweetty";

        // One way to print
// console.log(typeof full_Name);
// console.log(typeof Phone_Num);

        // another way to print
// console.log("My username is " + userName +  " My Mobile Number is " + Phone_Num);

        // another way to print- interpolation/template-literal/strings

// console.log(`
//     My User Name : ${userName},
//     My Mobile Number : ${Phone_Num}
// `);


    // OPERATORS/operations (+,-,*,/,%,--,++)

// let value1 = 25;
// let value2 = 5;

// console.log(value1 + value2)
// console.log(value1 - value2)
// console.log(value1 * value2)
// console.log(value1 / value2)
// console.log(value1 % value2)  //%(modular)= give remainder

// let result = value1 + value2;
// console.log(result);

        // Program to find discount and discount percentage (used in Ecommerce Sites at the time of Purchase)

// 1. program

// let mrp = 1999;
// let discount = 999;
// console.log("The MRP of item is " + mrp);

// let discountedPrice = (mrp-discount);
// console.log("Discounted Price is " + discountedPrice);

// let discountPercent = ((mrp-discount) / mrp) * 100;
// console.log("The Discount Percent is " + discountPercent);

// let roundpercent = Math.round(discountPercent);
// console.log("The rounded Discount Percent is " + roundpercent);

// 2. Program

// let mrp = 1999;
// let discount = 699;
// console.log("The MRP of item is " + mrp);

// let discountedPrice = (mrp-discount);
// console.log("Discounted Price is " + discountedPrice);

// let discountPercent = ((mrp-discount) / mrp) * 100;
// console.log("The Discount Percent is " + discountPercent);

// let roundpercent = Math.round(discountPercent);
// console.log("The rounded Discount Percent is " + roundpercent);

        //print using template literal

// console.log(`
//         MRP : ${mrp}
//         Discount : ${discount}
//         Discounted Price : ${discountedPrice}
//         Discounted Percent : ${discountPercent}
//         Rounded Percent : ${roundpercent}

// `)

// Post increment (ab++) and Pre Increment (++ab) 

//1. Post Increment
// let ab = 5;
// let abc = ab++;
// console.log(abc);       result= 5 

//2. Pre Increment
// let ab = 5;
// let abc = ++ab;
// console.log(abc);       result= 6

//* [We always use +1 for increment 1 instead of ++]
let ab = 5;
let abc = ab+1;
console.log(abc);