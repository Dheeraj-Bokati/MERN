//* syntax of function
function functionName(parameters){
    //code to be executed
}

//! function call
function greet1(){
    console.log("Hello, World!");
}
greet1(); // Output: Hello, World!

//* function with input parameters & arguments
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Dheeraj"); // Output: Hello, Dheeraj!

//* default parameters
function greet(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greet(); // Output: Hello, Guest!

function add(a=0 ,b=0) {
    console.log(a + b);
}
add(5, 10); // Output: 15
add(10); // Output: 10
add(); // Output: 0

//!function with return type
function add(a, b) {
    return a + b;
}   
let sum = add(5, 10);
console.log(sum); // Output: 15

//------------------------------------------------
//function to check isEven(a) return true or false

function isEven(a)
{
    if(a%2==0){
        return true;
    }
    
        return false;
        
        //or simply return a%2==0;
    
}
let result = isEven(4);
console.log(result); 
console.log(isEven(7)); 


//! function expression
let sub = function(a, b) {
    return a - b;
}
console.log(sub(10, 5)); 

//------------------------------------------
let isOdd = function(a){
    return a%2!=0;
}   
console.log(isOdd(3)); 
console.log(isOdd(4)); 

//!arrow function

const multiply = (a, b) => {
    return a * b;
}
//or simply
// const multiply = (a, b) => a * b;
// or const multiply = a => a * 2; // for single parameter
console.log(multiply(5, 10));   


//! callback function    
const parentFunction = function (callback) {
    console.log("Inside parent function");
    callback(10);
}
const childFunction = function (a) {
    console.log("Inside child function", a);
}   
parentFunction(childFunction);

// parentFunction(function(a){
//     console.log("Inside child function", a);
// });

parentFunction((a) => {
    console.log("Inside child function", a);
});


//! higher order function
// A higher-order function is a function that takes another function as an argument or returns a function as its result.

const hof = () => {
    console.log("Inside higher-order function");
    const returned = () => {
        console.log("Inside returned function");
    };
    return returned;
};
const returnedFunction = hof(); // Output: Inside higher-order function
returnedFunction(); // Output: Inside returned function

const outer = (num1) => {
    const inner = (num2) => {
        return num1 + num2;
    };
    return inner;
};
const add5 = outer(5);  
const add10 = outer(10);

console.log(add5(10)); // Output: 15
console.log(add10(20)); // Output: 30

// now in complete arrow function
const outer1 = (num1) => (num2) => num1 + num2;
const add10 = outer1(10);
console.log(add10(20)); // Output: 30

//todo: IIFE (Immediately Invoked Function Expression)

//? An IIFE is a function that is defined and immediately invoked (called) in the same expression. It is often used to create a new scope and avoid polluting the global namespace.

(function() {
    console.log("This is an IIFE");
})();   
// Output: This is an IIFE
//? IIFEs can also be used to create private variables and functions that are not accessible from the outside.
const counter = (function() {
    let count = 0;  
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
})();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
counter.decrement(); // Output: 0
//? In this example, the count variable is private and can only be accessed and modified through the increment and decrement methods. This is a common pattern for creating modules in JavaScript and helps to keep code organized and maintainable.    
//? In summary, functions are a fundamental building block of JavaScript and are used to encapsulate reusable code. They can take parameters, return values, and be defined in various ways, including function declarations, function expressions, and arrow functions. Understanding how to work with functions is essential for writing efficient and effective JavaScript code.
//? It is important to note that functions in JavaScript are first-class citizens, meaning that they can be treated like any other value. This allows you to pass functions as arguments to other functions, return functions from functions, and assign functions to variables. This flexibility is one of the key features of JavaScript and is essential for writing modern JavaScript code.
//? Additionally, JavaScript provides a variety of built-in functions and methods for working with data, such as Math functions for performing mathematical operations, String methods for manipulating strings, and Array methods for working with arrays. Understanding how to use these built-in functions is essential for writing efficient and effective JavaScript code.
//? Finally, it is important to understand the concept of scope in JavaScript when working with functions. Variables declared inside a function are local to that function and cannot be accessed from outside the function. However, variables declared outside a function are global and can be accessed from anywhere in the code. Understanding how scope works is essential for writing clean and maintainable JavaScript code.
