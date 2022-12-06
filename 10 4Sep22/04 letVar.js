// Difference b/w Let and Var


// console.log(b);
// console.log(a);
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


//  Example

// console.log(a);   // access
// let a = 10;  // Initialization

// it will give error a can't be access before initialization

// let a = 10;  // Initialize
// console.log(a);  // access

// result = 10

// First Initialize then acces here we did