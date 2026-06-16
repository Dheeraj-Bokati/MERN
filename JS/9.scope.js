//! Scope
//? Scope is the current context of execution in which values and expressions are "visible" or can be referenced. 
//? If a variable or other expression is not in the current scope, it will not be available for use.


//* Global Scope
//? Global scope is the outermost scope in JavaScript. 
//? Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

let global_let = "global_let";
const global_const = "global_const";
var global_var = "global_var";
console.log(global_let, global_const, global_var); // Output: global_let global_const global_var

//* Block Scope
//? Block scope is the scope that is created by a block of code, such as an if statement or a for loop.
//? Variables declared with let and const are block-scoped, while variables declared with var are function-scoped.

if (true) {
    console.log("---Inside Block---");
    let block_let = "block_let";
    const block_const = "block_const";
    var block_var = "block_var";
    console.log(block_let, block_const, block_var); // Output: block_let block_const block_var
     console.log(global_let, global_const, global_var); // Output: global_let global_const global_var
}
// console.log(block_let, block_const); // ReferenceError: block_let is not defined
console.log(block_var); // Output: block_var

//* Function Scope
//? Function scope is the scope that is created when a function is invoked.
//? Variables declared within a function are in the function scope and can only be accessed within that function.

const scope = () => {
    console.log("---Inside Function---");
    console.log(global_let, global_const, global_var); // Output: global_let global_const global_var
   // console.log(block_let); // ReferenceError: block_let is not defined
   console.log(block_var); // Output: block_var

    let function_let = "function_let";
    const function_const = "function_const";
    var function_var = "function_var";
    console.log(function_let, function_const, function_var); // Output: function_let function_const function_var
};
scope();
/*
console.log(function_let); // ReferenceError: function_let is not defined
console.log(function_const); // ReferenceError: function_const is not defined
console.log(function_var); // ReferenceError: function_var is not defined   
*/

//* Local Scope
//? Local scope is the scope that is created when a function is invoked. 
//? Variables declared within a function are in the local scope and can only be accessed within that function.

//* Lexical Scope
//? Lexical scope is the scope that is created when a function is defined. 
//? Variables declared within a function are in the lexical scope and can only be accessed within that function.
//? access to variables from parent scopes not from child scopes.

console.log("---Lexical Scope---");

const outerFunction = () => {
    let outer_let = "outer_let";
    const innerFunction = () => {
        let x = 10;
        console.log(outer_let); // Output: outer_let
        console.log(x); // Output: 10

        const childFunction = () => {
            const y = 20;
            console.log(outer_let); // Output: outer_let
            console.log(x); // Output: 10
            console.log(y); // Output: 20
        };
        childFunction();
        // console.log(y); // ReferenceError: y is not defined
    };
    innerFunction();
    // console.log(x); // ReferenceError: x is not defined
};
outerFunction();

//* Scope Chain
//? Scope chain is the mechanism that JavaScript uses to resolve variable names. 
//? When a variable is accessed, JavaScript looks for it in the current scope. If it is not found, it looks in the parent scope, and so on, until it reaches the global scope.  

let a = 1;

const firstFunction = () => {   
    let b = 2;
    const secondFunction = () => {
        let c = 3;
        console.log(a, b, c); // Output: 1 2 3
    };
    secondFunction();
};  
firstFunction();


if (true) {
    let x = 10;
    if (true) {
       console.log(x); // Output: 10
        x = 20;
    }
    console.log(x); // Output: 20
}

//? In summary, understanding scope is essential for writing effective JavaScript code. It allows you to manage the visibility and accessibility of variables and functions, and it helps you avoid naming conflicts and unintended side effects. By using the appropriate scope for your variables and functions, you can write cleaner, more maintainable code that is easier to debug and understand.
//? It is important to note that JavaScript also has a concept of "closure", which is the ability of a function to access variables from its outer scope even after the outer function has returned. This allows for powerful programming patterns, such as creating private variables and functions, and it is an essential concept to understand when working with JavaScript.
//? Additionally, JavaScript has a concept of "hoisting", which is the behavior of moving variable and function declarations to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code, but it is important to understand how hoisting works to avoid unexpected behavior. Understanding hoisting is essential for writing clean and efficient JavaScript code.
//? Finally, it is important to understand that JavaScript has a global object, which is the top-level object in the global scope. In a browser environment, the global object is the window object, while in a Node.js environment, it is the global object. Understanding how the global object works and how to avoid polluting it with unnecessary variables and functions is essential for writing clean and maintainable JavaScript code.

