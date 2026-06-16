//! Hoisting
//? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

//? Variables declared with var are hoisted and initialized with undefined, while variables declared with let and const are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.

console.log(hoistedVar); // Output: undefined
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
// console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization

var hoistedVar = "I am a hoisted var";
let hoistedLet = "I am a hoisted let";
const hoistedConst = "I am a hoisted const";

console.log(hoistedVar); // Output: I am a hoisted var
console.log(hoistedLet); // Output: I am a hoisted let
console.log(hoistedConst); // Output: I am a hoisted const  


//? Function declarations are also hoisted, allowing you to call a function before its declaration in the code.

hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
    console.log("I am a hoisted function");
}

//? However, function expressions are not hoisted, and trying to call them before their declaration will result in a TypeError.

// hoistedFunctionExpression(); // TypeError: hoistedFunctionExpression is not a function
var hoistedFunctionExpression = function() {
    console.log("I am a hoisted function expression");
};

hoistedFunctionExpression(); // Output: I am a hoisted function expression  
console.log(hoistedFunctionExpression); // Output: [Function: hoistedFunctionExpression]

//? Arrow functions are also not hoisted, and trying to call them before their declaration will result in a TypeError.

hoistedArrowFunction(); // TypeError: hoistedArrowFunction is not a function
var hoistedArrowFunction = () => {
    console.log("I am a hoisted arrow function");
};

hoistedArrowFunction(); // Output: I am a hoisted arrow function

//? In summary, hoisting allows you to use variables and functions before they are declared in the code, but it is important to understand the differences between var, let, const, function declarations, function expressions, and arrow functions to avoid unexpected behavior.
//? It is generally recommended to declare variables and functions at the top of their scope to improve code readability and avoid confusion caused by hoisting.
//? Note: Hoisting is a behavior of JavaScript and is not a feature of the language. It is important to understand how hoisting works to write clean and efficient code.
//? In strict mode, hoisting behaves differently. Variables declared with var are still hoisted, but they are not initialized with undefined. Instead, they are left in a "temporal dead zone" until they are assigned a value. Accessing them before assignment will result in a ReferenceError.

 console.log(c); // ReferenceError: Cannot access 'c' before initialization
 let c = "I am a hoisted let in strict mode";
 console.log(c); // Output: I am a hoisted let in strict mode   

 //TDZ (Temporal Dead Zone) is the time between the start of the block and the point where the variable is declared. During this time, the variable cannot be accessed and will throw a ReferenceError if accessed.

 //? difference between var and let/const in terms of hoisting
//? var is hoisted and initialized with undefined, while let and const are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration. This means that variables declared with var can be accessed before they are declared, while variables declared with let and const cannot be accessed before they are declared. Additionally, var has function scope, while let and const have block scope, which can lead to different behavior when used inside loops or conditional statements.

//! how hoisting works

//* memory creation phase 
// memory allocation
// {x: undefined, hoist: (){}, a: undefined}

//* execution phase 
// execute
// memory initialize
// {x: 10, hoist:(){}, a: [function]}

console.log(x);
var x = 10;
console.log(x);

hoist();

function hoist() {
    console.log("hoist");
}
hoist();

a();
var a = () => {
    console.log("a");
};
a();