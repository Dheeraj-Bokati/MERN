//! this -> {object}

console.log(this); // this - empty object

function a () {
    console.log(this);
}

// a();  // this - global object of function

let user = {
    name: "john doe",
    email: "xyz",
    getName: function () {
        console.log(this.name);
    },
};

user.getName(); // john doe

//? this is the object of the particular function or scope where it is used.

let user1 = {
    name: "john doe",
    email: "xyz",
    getName: () => {
        console.log(this.name);
    },
};

user1.getName(); // undefined , because arrow function doesn't have its 'this' object in this case "this" inherit object of its parent function.

let user2 = {
    name: "john doe",
    email: "xyz",
    getName: function () {
        const a = () => {
            console.log(this.name); // here this refred to its parent's function object.
        };
        a();
    },
};

user2.getName(); // john doe

const fn = user2.getName;
fn(); // undefined -> global object , because this works on how function is being called , here fn indicates the global function so this is searching getName at global object.


class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    getName() {
        console.log(this.name);
    }

}

const u = new User ("john", "j@gmail.com");
// 'new' created an empty object and referenced to 'this' to its referense i.e u
u.getName();

//* function object

//! call, apply & bind

function introduce (age, email) {
    console.log("this is "+this.name, age , email);
}

let user3 = {
    name: "john doe",
    email: "xyz",
};

introduce.call(user3, 10, "j@gmail.com"); // intoduce.call(user3); --> instantly call
introduce.apply(user3, [10, "j@gmail.com"]); // intoduce.apply(user3); --> instantly call

// call and apply instantly call the function , the way of syntax is abit differ

//! bind
const fn1 = introduce.bind(user3); //  create an reference to call on future as fn();
fn1(10, "j@gmail.com");


// introduce.bind(user3, 10, "j@gmail.com")();

