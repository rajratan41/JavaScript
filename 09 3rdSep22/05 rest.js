// Rest operator

function sumTwo (...args) {
    console.log(args);

    let sum = 0;
    for (let a of args) {
        sum = sum + a;
    }
    return sum;
}

console.log(sumTwo(1, 2, 3, 4, 5));