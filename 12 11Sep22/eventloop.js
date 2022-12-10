// EventLoop - Refer Video 11 sept Live class Event Loop and Promise
// Timestamp - 1:50:20

const UserOne = () => {
    console.log("Hello i am User One");
};

const UserTwo = () => {

    setTimeout  ( () => {
        console.log("hye i am inside User Two");
    },2000)
    console.log("Hello i am User Two");
};

const UserThree = () => {
    console.log("Hello i am User Three");
};

UserOne();
UserTwo();
UserThree();