// Destructuring - When you have values inside an Array and You want to now pick out that value from Array and stored that value in a Variable

// examples
//1

// let sciValue = [2.72, 3.14, 9.81, 37, 100];

// let [e, pi, gravity, bodytemp, boil] = sciValue;

// console.log(e);
// console.log(gravity);
// console.log(boil);
// console.log(bodytemp);

//2

// let arrayOne = [1, 2, 3, 4, 5];
// let [a, b, c, d, e] = arrayOne;

// console.log(a);
// console.log(d);
// console.log(b);
// console.log(c);


//3. Array contain Multiple Array

// let fullStack = [ ["Html", "Css", "Js", "Tailwind"] , ["Nodejs", "express", "mongodb"] ];
// let [frontend,backend] = fullStack;

// console.log(backend);
// console.log(frontend);


//4. skipping some value from Array and store some value

// let arrayOne = [1, 2, 3, 4, 5];

// let [a, , b, , c] = arrayOne;

// console.log(a,b,c);


//5. if we don't know the length of an Array what could be the possible way to store all of them in variable

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...rest] = arrayOne;

console.log(a, b);
console.log(rest);