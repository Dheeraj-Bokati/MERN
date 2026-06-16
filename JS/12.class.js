//! class

class Person {
    name;
    email;
    #password; //private

    constructor (name, email, password){
        this.name = name;
        this.email = email;
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
    introduce() {
        console.log("This is Parent Class");
    }
}

const john = new Person ("john doe", "john@gmail.com", "12345");
// console.log(john);
// console.log(john.getPassword());
// console.log(john.name);
// const ram = new Person("Ram", "ram@gmail.com", "67890");


//! Student (name,email,password,faculty,roll,year)

class Student {
    #password;

    constructor(name,email,password,faculty,roll,year){
        this.name = name;
        this.email = email;
        this.#password = password;
        this.faculty = faculty;
        this.roll = roll;
        this.year = year;
    }

    getPassword() {
        return "Password:"+ this.#password;
    }

    }

// const dheeraj = new Student ("Dheeraj", "bokatidheeraj@gmail.com", "hello123", "IT", "12", "2023");
// console.log(dheeraj);
// console.log(dheeraj.getPassword());

//* Inheritance 

class Std extends Person {

    //super() -> calls Parent class constructor

    constructor (name, email, password, faculty, roll, year){
        super(name, email, password);
        this.faculty = faculty;
        this.roll = roll;
        this.year = year;
    }
    introduce() {
        console.log("This is Child Class");
    }
}

const stu1 = new Std (
    "student1",
    "stu1@gmail.com",
    "1234",
    "BCA",
    48,
    2023
);

console.log(stu1);
console.log(stu1.getPassword());
stu1.introduce();
john.introduce();

//! abstraction

class CoffeeMaker 
{
    makeCoffee() {
        //start
        this.#start();
        // water heating
        this.#heatWater();
        //coffee is ready
        this.#dispatch();
    }

    #start() {
        console.log("Starting.....");
    }

    #heatWater(){
        console.log("Heating water");
    }

    #dispatch() {
        console.log("coffee is ready");
    }
}



const cm = new CoffeeMaker();
cm.makeCoffee();


// Account (initial_amt, acc_name) -> deposit(), withdraw(), blc_inq(), get_details()

class Account {
   
    constructor (initial_amt, acc_name, branch) {
        this.initial_amt = initial_amt;
        this.acc_name = acc_name;
        this.branch = branch;
    }

    deposite (amount) {
        if(typeof amount === 'number'){
        this.initial_amt += amount;
        console.log("Rs. "+amount + " is deposited sucuessfully.");
        }
        else{
            console.log ("Please send numeric data as argument");
        }
    }

    withdraw (amount){
        if(typeof amount === 'number'){
        if (amount > this.initial_amt) {
            console.log ("Insufficient Balance !!");
        }
        else{
            this.initial_amt -= amount;
                console.log ("Rs. "+amount+" is withdrawed sucuessfully.");
            }
        }
        else{
            console.log ("Please send numeric data as argument");
        }
    }

    blc_inq() {
        console.log("Your total balance is Rs. "+ this.initial_amt);
    }

   get_details() {
        console.log ("Account Name : "+this.acc_name + "\nBranch : "+this.branch + "\nTotal Amount : Rs. "+this.initial_amt);
    }
}

const acc1 = new Account (500, "Dheeraj", "KTM");
// acc1.get_details();
// acc1.withdraw("abc"); // Please send numeric data as argument
// acc1.withdraw(600); // Insufficient balance
 acc1.deposite(10000);
 acc1.blc_inq();
 
//todo: static method, getter/setter, this keyword

