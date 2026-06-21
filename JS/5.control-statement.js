//! type conversion

//* explicit conversion

let a = "12rs";

console.log(Boolean(a)); // true
//  String()
//  Number()
console.log(Number(a)); // NaN
console.log(parseInt(a)); //12 "neglect string"
//parseFloat

//* implicit conversion : type coearcing

console.log("10" + 10); //1010 (here number 10 is implicitly convert into string)
console.log("10"-4); // 6 (here number 10 is implicitly converted into number)
console.log("ab"-4); // NaN (Not a Number)

//! truthy & falsy values

//* falsy : false , null , undefined , 0 , '', NaN , -0

console.log(Boolean(null)); // false
console.log(Boolean(""));  // false
console.log(Boolean(-0));  // false


let x = -1;
if (x) {
    console.log("Hello");
}

//! control flow
// order of execution
// top to buttom , left to right , one line at a time


//! control statements
// statements which alter the control flow based on their  conditions

//* if statement
//* if else statement
let age = 18;

if( age >= 18){
    console.log ("Can Vote");
}
else {
    console.log (" Cannot Vote ");
}

//* else-if ladder
// if age >= 60 -> major
// if age > 18 < 60 -> adult
// if age < 18 -> minor

if(age >=60){
    console.log("Major");
}
else if (age >= 18 && age < 60){
    console.log("Adult");
}
else{
    console.log("Minor");
}

//! switch - case

//! loops

