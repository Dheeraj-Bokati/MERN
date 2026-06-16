//! array methods
//? push, pop, shift, unshift, at, includes, indeOf, lastIndexOf ....

const numbers=[1, 2, 3, 4, 5];

//* forEach
//array_name.forEach(callback(currentValue, index, array)) -> returns undefined

const callback = (value, index, array) => {
    console.log(value, index, array);
    return value*2;
};
// const result = numbers.forEach(callback);
numbers.forEach((_, index) => {
    console.log(index);
});

let doubled = [];

numbers.forEach((val, index) => {
    console.log(index);
    doubled.push(val*2);
});
 console.log(numbers, doubled); // Output: [1, 2, 3, 4, 5] [2, 4, 6, 8, 10]

//* map
// map is used to create a new array by applying a function to each element of the original array.

const doubled1 = numbers.map((val) => val*2);
console.log(numbers, doubled1); // Output: [1, 2, 3, 4, 5] [2, 4, 6, 8, 10]
//or 
const double = (val) => val*2;
const doubled2 = numbers.map(double);
console.log(numbers, doubled2); // Output: [1, 2, 3, 4, 5] [2, 4, 6, 8, 10]

//* filter
// filter is used to create a new array with all elements that pass the test implemented by the provided function.
// return new array

const even1 = numbers.filter((val, index) => {
    if (val % 2 === 0) {
         return val;
        //return true;
    }
    //return false;
});
console.log(numbers, even1); // Output: [1, 2, 3, 4, 5] [2, 4]

//or 
const even = numbers.filter((val, index) => val % 2 === 0);
console.log(numbers, even); // Output: [1, 2, 3, 4, 5] [2, 4]

//* reduce
// reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

const totalSum = numbers.reduce((acc, val) => {
return (acc += val);
}, 0);

console.log(numbers, totalSum); // Output: [1, 2, 3, 4, 5] 15

const cart = {
    user: {},
    items: [
        {id: 1, product: {price: 100}, quantity: 2},
        {id: 2, product: {price: 200}, quantity: 1},
        {id: 3, product: {price: 50}, quantity: 4},        
    ],
};
const total = cart.items.reduce ((acc, items) => {
    return (acc += items.product.price * items.quantity);
}, 0);

console.log(cart, total); // Output: {user: {}, items: Array(3)} 600

//* find
// find is used to return the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
/*
 const found = numbers.find((val) => {
    if (val > 3) {
        return val;
        //or, return true;
    }
 });
 */
const found = numbers.find((val) => val > 3);
 console.log(numbers, found); // Output: [1, 2, 3, 4, 5] 4

 const lastFound = numbers.findLast((val) => val > 3);
 console.log(numbers, lastFound); // Output: [1, 2, 3, 4, 5] 5

 const findId = cart.items.find((item) => item.id === 2);
 console.log(cart, findId); // Output: {user: {}, items: Array(3)} {id: 2, product: {price: 200}, quantity: 1}

 //* findIndex
// findIndex is used to return the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

const findIndex = cart.items.findIndex((item) => item.id === 2);
 console.log(cart, findIndex); // Output: {user: {}, items: Array(3)} 1

 //? some, every
// some is used to test whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// every is used to test whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const hasExpensiveItem = cart.items.some((item) => item.product.price > 150);
console.log(cart, hasExpensiveItem); // Output: {user: {}, items: Array(3)} true

const allItemsExpensive = cart.items.every((item) => item.product.price > 150);
console.log(cart, allItemsExpensive); // Output: {user: {}, items: Array(3)} false

//*  sort
// sort is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const arr = [5, 2, 9, 1, 5, 6];
arr.sort((a, b) => a - b);
// a - b -> ascending order
// b - a -> descending order
// +ve value -> a is greater than b , swap a and b
// -ve value -> a is less than b , do not swap a and b
// 0 -> a and b are equal , do not swap a and b
console.log(arr); // Output: [1, 2, 5, 5, 6, 9]

const arr2 = ['banana', 'apple', 'grape', 'orange'];
arr2.sort();
console.log(arr2); // Output: ['apple', 'banana', 'grape', 'orange']

//? It is important to note that the sort() method modifies the original array and does not create a new array. If you want to keep the original array unchanged, you can create a copy of the array before sorting it using the slice() method or the spread operator.

const arr3 = [5, 2, 9, 1, 5, 6];
const sortedArr3 = [...arr3].sort((a, b) => a - b);
console.log(arr3); // Output: [5, 2, 9, 1, 5, 6]
console.log(sortedArr3); // Output: [1, 2, 5, 5, 6, 9]  
//? In summary, arrays in JavaScript are a powerful and flexible data structure that can be used to store and manipulate collections of data. They provide a wide range of built-in methods for performing various operations, such as adding and removing elements, searching for elements, and sorting the array. Understanding how to work with arrays is essential for writing efficient and effective JavaScript code.
//? It is important to note that arrays in JavaScript are zero-indexed, meaning that the first element of the array is at index 0, the second element is at index 1, and so on. This can sometimes lead to off-by-one errors when working with arrays, so it is important to be mindful of the indexing when accessing elements of an array.
//? Additionally, arrays in JavaScript can contain elements of different types, including other arrays and objects. This allows for the creation of complex data structures, such as multidimensional arrays and arrays of objects, which can be used to represent a wide variety of data. Understanding how to work with these complex data structures is essential for writing effective JavaScript code.
//? Finally, it is important to understand that arrays in JavaScript are mutable, meaning that you can change the contents of an array after it has been created. This can be both a powerful feature and a potential source of bugs, so it is important to be careful when modifying arrays and to always consider the implications of mutating an array before doing so.