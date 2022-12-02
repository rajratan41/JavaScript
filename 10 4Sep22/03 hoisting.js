// Hoisting - When you are able to access anything before it is declared.

// example -

console.log(name);
sum();

var name = "Raj Ratan";
function sum() {
    console.log("Hello Sum");
}
