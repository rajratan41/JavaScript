// Closure - When inner function access variable or values of outer function , they are called as Closure

// Scenario to Understand Closure
// 1

// function outer () {
//     let variable = "Seven";

//     function inner () {
//         console.log(variable);
//     }
//     inner();
// }
// outer();


// 2

function outer () {
    let var1 = "Raj Ratan";

    function inner () {
        console.log(var1);
    }
    return inner;
}

 let var1 = outer();
 var1();