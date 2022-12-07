let nam = "Raj Ratan";
let email = true;
let un = undefined;
let nul = 0;

//First way to print

console.log(typeof nam);
console.log(typeof email);
console.log(typeof un);
console.log(typeof nul);

//second way to print
console.log("My Name is " + nam + " My email is " + "Undefined is " + "Null is ");

//third way to print Interpolation/template literal

console.log(`
    My Name is : ${nam},
    My Email is : ${email},
    Undefined is : ${un},
    Null is : ${nul}
`)