//  let userDetails = {
//     firstName: "Raj",
//     lastName: "Ratan",
//     role: "admin",
//     loginCount: 25,
//  };

//  console.log(userDetails);
//  console.log(userDetails.firstName);
//  console.log(userDetails.lastName);
//  console.table(userDetails);

// update value

// userDetails.loginCount = 32;
// console.log(userDetails);

// Mini Program 
// Method in object

// let userDetailCourse = {
//     firstName: "Raj",
//     lastName: "Ratan",
//     role: "admin",
//     googleLogin: "true",
//     courseList: [],
//     buyCourse: function (courseName) {
//         this.courseList.push(courseName);
//     },

// };


// userDetailCourse.buyCourse("Pro Backend");
// console.log(userDetailCourse.courseList);

// userDetailCourse.buyCourse("React Js")
// userDetailCourse.buyCourse("JavaScript")
// userDetailCourse.buyCourse("Angular")

// console.log(userDetailCourse.courseList);


// Mini Program

// let userDetailCourse = {
//     firstName: "Raj",
//     lastName: "Ratan",
//     role: "admin",
//     googleLogin: "true",
//     courseList: [],
//     buyCourse: function (courseName) {
//         this.courseList.push(courseName);
//     },

//     getCourseCount: function () {
//         return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
//     },
// };



// userDetailCourse.buyCourse("Pro Backend");
// userDetailCourse.buyCourse("React Js")
// userDetailCourse.buyCourse("JavaScript")
// userDetailCourse.buyCourse("Angular")

// console.log(userDetailCourse.courseList);

// console.log(userDetailCourse.getCourseCount());


// Keys-

// console.log (Object.keys(userDetailCourse));

// Value-

// console.log(Object.values(userDetailCourse));

// Check Specific key-

// console.log(userDetailCourse.hasOwnProperty("firstName"));



// Loop

// for of - used with Array
// for in - used with Object

// for in

 let userDetails = {
    firstName: "Raj",
    lastName: "Ratan",
    role: "admin",
    loginCount: 25,
 };

for (let x in userDetails){
    // console.log(x);     
    
    // it will print key 
    // firstName
    // lastName
    // role
    // loginCount

    // console.log(userDetails[x]);

    // it will print value
    //Raj
    // Ratan
    // admin
    // 25

    console.log(`key is ${x} and value is ${userDetails[x]}`);
};