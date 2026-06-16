const user1 = {
    name: "John",   
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    },
};
const user2 = {
    name: "Jane",   
    age: 25,
};

//! optional chaining [?.]
console.log(user1.address?.city);    // Output: "New York"
console.log(user2.address?.city);   // Output: undefined

//It can be solve using if else statement but it is not practically posible for huge data. So we can use nullish coalescing operator [??] to provide a default value if the left-hand side is null or undefined.

//! nullish coalescing operator [??]

console.log(user1.address?.city ?? "City not found");   // Output: "New York"
console.log(user2.address?.city ?? "City not found");   // Output: "City not found
