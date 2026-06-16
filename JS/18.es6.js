// es6
//? ECMA Script 6 -> 2015

//* let , const

//* template literal -> `` 

//* arrow function

//* enhanced object literals

let name = "john";
let key = "email";
let u = {
    name, //name : name -> name : 'john'
    [key] : "john@gmail.com", // email:''
    getName : function() {
        return this.name;
    },
    getEmail(){
        return this.email;
    },
};

//* destructuring

//* spread op ...

//* rest op ...

//* default parameter

//* array methods: map , filter , reduce

//* es module -> import / export

//* rest parameter ...

// function add (a,b) {
//     return a+b;
// }

function add( ...params){
    console.log(params);
    let sum = 0;
    sum = params.reduce((a,b) => a+b);
    console.log(sum);
}
 add(1);
 add(1,2);
 add(1,2,3);
 add(1,2,3,4);