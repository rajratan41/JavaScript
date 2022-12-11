// Promise - (callback, Promise constructor (then, catch), async, await)
// - Pending (resolve, reject)
// - fullfilled (resolve)
// - reject (reject)



const MakePromise = new Promise ((resolve, reject) => {
    setTimeout (() => {
        const arrOne = ["userOne", "userTwo", "userThree"];
        if (arrOne.length > 0){
            resolve ("User Found");
        }else {
            reject ("User not Found");
        }
    },2500);
});

MakePromise.then((result) => {
    console.log(result);
}) .catch ((result) => {
    console.log(result);
});