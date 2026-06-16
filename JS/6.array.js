//numbered index -> 0th index

//! new keyword
// const arr = new Array(6, 2); 

//! array literal []
const numbers = [1, 2, 3, 4, 5];

//reading elements from array
//array-name[index]
const ele = numbers[0]; 
console.log(ele); // Output: 1
console.log(numbers[2]); // Output: 3
console.log( numbers); // Output: [] [1, 2, 3, 4, 5]

// adding new element in array
//from end
//push method
//array_name.push(item1, item2, ...); -> returns new length of the array
const res=numbers.push(6, 7, 8, 9, 10);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(res); // Output: 10 (new length of the array)   

//from start
//unshift method
//array_name.unshift(item1, item2, ...); -> returns new length of the array
const res1=numbers.unshift(-4, -3, -2, -1, 0);
console.log(numbers); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(res1); // Output: 15 (new length of the array)

//from middle
//splice method
//array_name.splice(start_index, delete_count, item1, item2, ...); -> returns an array of deleted elements
const res2=numbers.splice(5, 0, "a", "b", "c"); // it will add elements at index 5 and delete 0 element
console.log(numbers); // Output: [-4, -3, -2, -1, 0, 'a', 'b', 'c', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(res2); // Output: [] (no element is deleted)
const res3=numbers.splice(5, 3, "x", "y", "z"); // it will replace elements at index 5, 6, 7 and delete 3 element
console.log(numbers); // Output: [-4, -3, -2, -1, 0, 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(res3); // Output: ['a', 'b', 'c'] (deleted elements)

//removing elements from array
//from end
//pop method
//array_name.pop(); -> returns the removed element
const res4=numbers.pop();
console.log(numbers); // Output: [-4, -3, -2, -1, 0, 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(res4); // Output: 10 (removed element)

//from start
//shift method
//array_name.shift(); -> returns the removed element
const res5=numbers.shift();
console.log(numbers); // Output: [-3, -2, -1, 0, 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(res5); // Output: -4 (removed element)

//from middle
//splice method
//array_name.splice(start_index, delete_count); -> returns an array of deleted elements 
const res6=numbers.splice(5, 3); // it will delete elements at index 5, 6, 7 and delete 3 element
console.log(numbers); // Output: [-3, -2, -1, 0, 'x', 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(res6); // Output: ['y', 'z', 1] (deleted elements)  

//length of the array
//array_name.length -> returns the number of elements in the array
console.log(numbers.length); // Output: 13
console.log(numbers[numbers.length-1]); // Output: 9 (last element of the array)

//searching an element in the array
//includes method
//array_name.includes(element) -> returns true if element is found in the array, otherwise false
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(10)); // Output: false

//indexOf method
//array_name.indexOf(element) -> returns the index of the first occurrence of the element in the array, otherwise -1
console.log(numbers.indexOf(3)); // Output: 6
console.log(numbers.indexOf(10)); // Output: -1

console.log(numbers.lastIndexOf(3)); // Output: 6 (index of the last occurrence of the element in the array)


//join method
//array_name.join(separator) -> returns a string by concatenating all the elements of the array, separated by the specified separator
const str = numbers.join(", ");
console.log(str); // Output: "-3, -2, -1, 0, x, 1, 2, 3, 4, 5, 6, 7, 8, 9"
const str1 = numbers.join(" - ");
console.log(str1); // Output: "-3 - -2 - -1 - 0 - x - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9"

//? In summary, arrays are a fundamental data structure in JavaScript that allow you to store and manipulate collections of data. They provide various methods for adding, removing, and searching elements, as well as for performing other operations such as sorting and filtering. Understanding how to work with arrays is essential for writing efficient and effective JavaScript code.
//? It is important to note that arrays in JavaScript are dynamic, meaning that they can grow and shrink in size as needed. This makes them a powerful tool for managing data, but it also means that you need to be careful when working with them to avoid performance issues and memory leaks. Always remember to clean up any references to arrays that are no longer needed to free up memory and improve performance.
//? Additionally, JavaScript provides a variety of built-in methods for working with arrays, such as map, filter, reduce, and forEach, which allow you to perform complex operations on arrays in a concise and efficient manner. These methods are essential for working with arrays in modern JavaScript development and can help you write cleaner and more maintainable code.
//? Finally, it is important to understand that arrays in JavaScript are objects, and as such, they have properties and methods that can be used to manipulate them. This means that you can use array methods to modify the contents of an array, but you can also use object methods to manipulate the array itself. For example, you can use the Object.keys() method to get an array of the keys of an array, or you can use the Object.values() method to get an array of the values of an array. Understanding how to work with arrays as objects is essential for writing effective JavaScript code.
