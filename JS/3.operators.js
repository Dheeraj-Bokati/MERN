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
console.log(b == c); // true
console.log(b === c); // false


//* logical op.
//? && , || , !
