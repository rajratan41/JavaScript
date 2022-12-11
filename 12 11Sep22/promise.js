// Promise - (callback, Promise constructor (then, catch), async, await)
// - Pending (resolve, reject)
// - fullfilled (resolve)
// - reject (reject)



// const MakePromise = new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         const arrOne = ["userOne", "userTwo", "userThree"];
//         if (arrOne.length > 0){
//             resolve ("User Found");
//         }else {
//             reject ("User not Found");
//         }
//     },2500);
// });

// Syntax - MakePromise.then().catch()

// console.log(MakePromise.then());


// MakePromise.then((result) => {
//     console.log(result);
// }) .catch ((result) => {
//     console.log(result);
// });




// async and await

const userOne = () => {
    return "I am User One";
};

const userTwo = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve ("User Two Found");
        }, 2000)
    });
};

const userThree = () => {
    return "I am User Three";
};

const waiter = async () => {
    let guestOne = userOne();
    console.log(guestOne);

    let guestTwo = await userTwo();
    console.log(guestTwo);

    let guestThree = userThree();
    console.log(guestThree);
};

waiter();