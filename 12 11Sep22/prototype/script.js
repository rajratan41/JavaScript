// Prototype
// For Video Reference -  11th Sept Live Class Event Loop and promise


let myHero = ["thor", "spiderman"];
let dcHero = ["superman", "batman", "iceman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};


// Manipulate Object with adding Method Raj

Object.prototype.raj = function raj () {
    console.log(`Raj is present in all objects`);
}

// heroPower.raj()


// Manipulating Array with adding method heyArray

Array.prototype.heyArray = function heyArray () {
    console.log(`Total elements are ${this.length}`);
}

// myHero.heyArray()
// dcHero.heyArray()


// Prototyple Inheritance

const User = {
    name: "top name",
    email: "abc@gmail.com" 
}

const teacher = {
    makeVideo: true
}

const teacherSupport = {
    isAvailable: false
}

// Another way - not use nowaday

const tsAssistant = {
    makeAssignment: "Js Assignment",
    fullTime: true,

    __proto__: teacherSupport
}
// One way
// teacher.__proto__ = User;

// another way
// teacher.prototype = User;

// Another way - Used in Today's World
Object.setPrototypeOf (teacher, User)

Object.setPrototypeOf(teacherSupport, teacher)



// Challenge to create a method using manipulating string to print truelength of string not count blank space

// manipulate string 

String.prototype.truelength = function () {
    console.log(`true length is ${this.trim().length}`);
}

console.log("Raj    ".length);

"raj         ".truelength();