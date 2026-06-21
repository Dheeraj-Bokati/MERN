//! Operators

//* arithmetic op.
//? + , - , * , / , % , ** [power] , ..

console.log(10+2);               // for sum
let a= "Hello" + "World";       // for concadinating
console.log(a);         // i.e operator overloading

//* assignment
//? = , += , -= , *= , /= , %= ,

let x = 10;
let y = 10;

x += 5; // x = x+5;
console.log(x); // output: 15


//* comparison op.
//?  == , === , < , > , <= , >= , != , !==
//? output -> boolean

// 10 < 12 // true
// 12 < 12 // false
// 12 <= 12 // true

let b = "10";
let c = 10;
console.log(b == c); // true  // perform type coearcing i.e implicit conversion first string 10 convert into number then perform equal operator
console.log(b === c); // false


//* logical op.
//? && , || , !

//! unary op
//? increment   ++
let z = 10;
console.log(z++); // 10 , 11  (post increment)
console.log(++z); // 11 , 12  (pre increment)

//? decrement   --

//* ternary op
//? condition ? exp_1 (true) : exp_2 (false)
// one linear if else
let age = 17;
let res = age >=18 ? "can vote" : "can not vote";    

//* typeof op
console.log(typeof b); // string