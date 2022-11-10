//Array []
        //this method is called Array Literal (used in real world)

// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];

// To Print Array
// console.log(Arr1);

// To Reverse Array - syntax= array.reverse()
//console.log(Arr1.reverse());

// Store reversed array in new array then print
// let revArr = Arr1.reverse();
// console.log(revArr);

// // To Print Length of Array- Syntax- array.length
// console.log(Arr1.length);


// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];

// //To access a value- [index no. of value] eg- to access Anirudh index no. of Anirudh is 1
// console.log(Arr1[1]);   //result- Anirudh
// console.log(Arr1[0])    //result- Hitesh sir bcz in Array index no. start from 0
// console.log(Arr1[2])    //result- Prasad
// console.log(Arr1[3])    //result- Surya
// console.log(Arr1[4])    //result- Undefine (bcz there is no value in index 4)

// //To access Last value of Array i.e, Surya

// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];
// console.log(Arr1[Arr1.length - 1]);  //Arr1.length- to check the length of Array then -1 to access last value in Array


//To replace Value with Another like- here we change the value Suraj to Anurag
    //index no of surya=3
// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];
// Arr1[3] = "Anurag";
// console.log(Arr1);  //result- Surya replaced with Anurag


// To Push(add) value in array
// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];
// console.log(Arr1);      //output- [ 'Hitesh sir', 'Anirudh', 'Prasad', 'Surya' ]
// Arr1.push("Anurag");    //adding Anurag in Arr1
// console.log(Arr1);      //output- (added Anurag in Array Arr1)  [ 'Hitesh sir', 'Anirudh', 'Prasad', 'Surya', 'Anurag' ]

                   
                        // SLICE Method - it create new array(Arr2) from original array (Arr1)

//index no-     0       ,       1  ,    2    ,    3    
// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];
//Syntax-  array.slice(start index, end index)  result is end index-1
// console.log(Arr1.slice(1, 4));  // print from index 1 to 3   [ 'Anirudh', 'Prasad', 'Surya' ]

//To store value of Slice Array in New Array
// let Arr1 = ["Hitesh sir", "Anirudh", "Prasad", "Surya"];
// here storing slice in new array i.e, Arr2
// let Arr2 = Arr1.slice(1, 4);
// console.log(Arr2);  //output- [ 'Anirudh', 'Prasad', 'Surya' ]


                // SPLICE method - it change original array (name) and add changes to the original array (name) 


// how many delete-0 [0= no delete only add]

// let nam = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg"];
//console.log(nam);

//Syntax- array.splice(index,how many to delete, value to add)

//nam.splice(2, 0, "New Value 1", "New Value 2");     //(index-2, how many delete-0 [0= no delete only add], value to add- "New Value 1", "New Value 2")

//console.log(nam);


// how many delete-2 [= delete 2 values from where new value placed]

//let nam = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg"];

//nam.splice(2, 2, "New Value 1", "New Value 2");     //(index-2, how many delete-2 [= delete 2 values from where new value placed], value to add- "New Value 1", "New Value 2") 

// console.log(nam);


        // Concatinition of two Array (to merge two array in 1)
// let nam = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg"];
// let nam1 = [1, 2, 3, 4, 5, 6];
// console.log(nam.concat(nam1));

    // Concatinate more than 1 array
// let nam = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg"];
// let nam1 = [1, 2, 3, 4, 5, 6];
// let nam2 = [7, 8, 9, 1];
// let nam3 = ["aman", "naman"]

// In this array- mergedArr all are merged and stored in mergedArr 
// let mergedArr = (nam.concat(nam1, nam2, nam3));
// console.log(mergedArr);


//How can we copy Value of an Array inside an Array [copyWithin]
//example-1
//let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//syntax- array.copyWithin(target index - form where to start print, start index- from where to copy, end index- jaha tk copy krna h [endindex-1 print hoga])

// console.log(Arr1.copyWithin(1, 5, 8));

//example-2
// let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Arr1.copyWithin(1, 4, 7));

//include - it will check value and index no.       syntex- array.includes(which value you want to check, index no. of that value)

//Example-1
//let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(arr1.includes(5, 4));   //result- true (bcz 5 have index no. 4)

// console.log(arr1.includes(5, 6));   //result- false (bcz 5 have index no. 4 but we write there index no. 6)

//Example-2
// let arr1 = ["aman", "naman", "golu", "molu"];
// console.log(arr1.includes("naman", 2));


//indexOf - to check index no.

// let arr1 = [1, 2, 3, 4, 5, "LCO", 7, 8, 9];
// console.log(arr1.indexOf(5));
// console.log(arr1.indexOf(8));
// console.log(arr1.indexOf(7));
// console.log(arr1.indexOf("LCO"));


//* MAP method   syntax- array.map(expression)

//let num = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
//storing value in new array
//let sqRoot = num.map(Math.sqrt);
//print
//console.log(sqRoot);

//direct print without storing in another array
// console.log(num.map(Math.sqrt));


// Shift Method - removing starting value in original array and modify original array

// let num = [1, 4, 9, 16, 25];
// console.log(num.shift()); // removed 1
// console.log(num);   //printed without 1 and modified array [4, 9, 16 , 25]
// console.log(num.shift());   //removed 4
// console.log(num);   //printed without 4  and modified array [9, 16 , 25]


// Sort - sorting Alphabatically

// let names = ["Hitesh sir", "Anirudh", "Prasad", "Surya", "Aman"];
// //print
// console.log(names.sort());

// // storing sorted array in array
// let arrNames = names.sort();
// //print
// console.log(arrNames);


// toString - it is changing Array to normal text

// let names = ["Hitesh sir", "Anirudh", "Prasad", "Surya", "Aman"];
// console.log(names.toString());  //output- Hitesh sir,Anirudh,Prasad,Surya,Aman


// unshift - modify original array and add value to stating

// let names = ["Hitesh sir", "Anirudh", "Prasad", "Surya", "Aman"];

// console.log(names.unshift("New Value 1")); //it will shows how many values are in string now

// console.log(names.unshift("New Value 2"));  //you can add as much values as you want

// console.log(names.unshift("New Value 3"));
// console.log(names.unshift("New Value 4"));
// console.log(names.unshift("New Value 5"));

//added 5 new values i.e New Value 1,  New Value 2,  New Value 3,  New Value 4.  New Value 5
// and it will add values always from start

// console.log(names); //print the all values including new values which are added

//output

// [
//     'New Value 5', 'New Value 4',
//     'New Value 3', 'New Value 2',
//     'New Value 1', 'Hitesh sir',
//     'Anirudh',     'Prasad',
//     'Surya',       'Aman'
//   ]


// split method- convert string into array
//syntax- str.split("")

// let str = "javascript";
// let ar1= str.split("");
// console.log(ar1);


//Few important functions of Maths Methods

//pie = 3.14    syntax- Math.PI

// const PI = Math.PI;
// console.log(PI);
//round the value of pie
// console.log(Math.round(PI));

//floor     syntex- Math.floor(array)

//const PI = Math.PI;
//console.log(Math.floor(PI));    // Pie = 3.14 , here floor print lowest value near to decimel of 3.14 i.e- 3

//ceil      syntex- Math.ceil(array)

// const PI = Math.PI;
// console.log(Math.ceil(PI));     // here ceil print maximum value near to decimel i.e- 4

//Min -it gives minimum value

//syntax- Math.min(array)
// console.log(Math.min(12, 10, -5, 43, 39, -10, 54, 89, 75, 48));

//Max - it gives maximum value

//syntax- Math.max(array)
// console.log(Math.max(12, 10, -5, 43, 39, -10, 54, 89, 75, 48));


//Creating Random number
//Random no always btwn 0 to 0.99999 not cross 1

// let num = Math.random();
// console.log(num);

//Random no from 1

// let num = Math.random();
// let num1 = Math.random() *11;
// console.log(num1);
// console.log(Math.round(num1));


//absolute- syntax- Math.abs(no.) 
// console.log(Math.abs(-10));     //it will give always postive no. here it give 10
// console.log(Math.abs(-15));
// console.log(Math.abs(-30));
// console.log(Math.abs(-56));

//sqrt- it will give square root of no.
//syntax- Math.sqrt(no.)

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(225));
// console.log(Math.sqrt(196));
// console.log(Math.sqrt(144));

//pow- syntax- Math.pow(no, how much power ex-2,4,3,5)

// console.log(Math.pow(3,2))  // 3*3
// console.log(Math.pow(4,3))  //4*4*4
// console.log(Math.pow(6,5))  //6*6*6*6*6
// console.log(Math.pow(8,4))  //8*8*8*8


//Trignometry-Functions
//syntax- Math.sin(value)   value- sin(0) = 0

// console.log(Math.sin(0));
// console.log(Math.cos(90));
// console.log(Math.tan(60));
// console.log(Math.sin(45));





            //Another way to declare Array using CONSTRUCTER
            //(never used in Real world)

// let newarr = new Array("Hitesh sir", "Anirudh", "Prasad", "Surya");
// console.log(newarr);



