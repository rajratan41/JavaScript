//Syntax of if else
// == [only check the value]

// let rating = 4;

// if(rating == 5) {
//     console.log("Excellent");
// }
// else {
//     console.log("Below 5")
// }

//=== [check value and type of value]

// let rating = "5";

// if (rating === 5) {
//     console.log("Excellent");
// }
// else {
//     console.log("Below 5")      
// }        // Result= Below 5 (because === will check the type of value also and type of value is "string"- "5" not number and we here give condition in Number-5)


// Program on Rating App

// let rating = 3;

// if (rating == 5) {
//     console.log("Excellent");
// }
// else if (rating == 4) {
//     console.log("Better");
// }
// else if (rating == 3) {
//     console.log("Good");
// }
// else if (rating == 2) {
//     console.log("Rating 2");
// }
// else if (rating == 1) {
//     console.log("Rating 1");
// }
// else {
//     console.log("Not Given");
// }
// console.log("Completed");


//Program in if else

// && = And (dono follow kre tbhi print)
// ||=Or (dono me se koi 1 v follow kre print it)

//1.
// let email = true;
// let mobile = false;

// if (email == true && mobile == true) {
//     console.log("Redirect to homepage");
// }
// else if (email == false && mobile == true) {
//     console.log("Redirect to Email Verification");
// }
// else if (mobile == false && email ==true) {
//     console.log("Rediect to Mobile Verification");
// }
// else {
//     console.log("Create your Account");
// }

//2. ||=or

// let email = false;
// let mobile = true;

// if (email == true && mobile == true) {
//     console.log("Redirect to homepage");
// }
// else if (email == true || mobile == true) {
//     console.log("Redirect to Email Verification");
// }
// else {
//     console.log("Create your Account");
// }

//3. ||=or

// let email = false;
// let mobile = true;

// if (email == true || mobile == true) {
//     console.log("Redirect to homepage");
// }
// else if (email == false && mobile == true) {
//     console.log("Redirect to Email Verification");
// }
// else {
//     console.log("Create your Account");
// }

//Result= Redirect to homepage ( Here you see 2nd(else if) conditions follows but it follows 1st(if) condition bcz it will follow order who is first written executed first and in 1st we use ||(or) that's 1st follow) ||=Or (dono me se koi 1 v follow kre print it)

        
            //Ternary Operator
// Syntax-  condition ? expression : expression
                        //true     : false

// var loggedin = false;

// loggedin ? console.log("Home Page") : console.log("Login First")


// we can also write above program in if else

// var loggedin = false;
//     // ! = not operator
// if (!loggedin) {
//     console.log("Login First");
// }
// else {
//     console.log("Home Page");
// }
