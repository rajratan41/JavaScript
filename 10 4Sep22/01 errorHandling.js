// Error Handling/ Exception Handling - 

//  Syntax

//  try {

    
// }  catch (use any variable you want) {

// } 
//  finally {

// }


// try - wrap up the code which can throw the error
// catch - write the code to do something when error occurs
// Finally - It will always execute

// Example

try {
    let firstName = "Aman";
    console.log(firstName + "" + lastName);
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log("Important Operation");
}


// Throw -

// There are 3 types of errors in Js
// Reference Error
// Syntax Error
// Type error