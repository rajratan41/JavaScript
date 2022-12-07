// Difference b/w Let, Var, Const


// console.log(b);  // gives error bcz we access let before initialization
// console.log(a);  // gives undefine bcz var is stored in Global so it scanned and got undefined
// var a = 10;
// let b = 20;

// Var - var is stored in Global

// Let - let is stored in a different scope inside Global
// Let - let cannot access before initialization because Let is in differernt scope inside Global
//  Example

// {   This is Global
//      
//      var a = 10;
// 
//      {   This is inside Global
// 
//          let b = 20; 
// 
//      }
// }


//  Example of Let

// 1

// console.log(a);   // access
// let a = 10;  // Initialization

// it will give error a can't be access before initialization

// 2

// let a = 10;  // Initialize
// console.log(a);  // access

// result = 10

// First Initialize then access




// Const - As soon as something is declared as Const it is mandatory to initialize value on the spot

// example - 

// 1
//  const a;
//  a = 10;
//  this will give error bcz when a is declared as const then it is mandatory to put value


// 2
// const a = 10;    // Initialize
// console.log(a);  // access