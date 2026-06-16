//! execution context
//! callstack

// memory creation
// {a: (){}}


//execution


let x = 10;

console.log(x);

function a() {
    let y = 30;
    console.log(y);

    function b() {

        console.log('b');

        function c() {
            console.log('c');
        }
        c();
    }

    b();
}

a();

//CExecution  ---> complete execution and pop out and erased
//BExecution ----> complete execution and pop out and erased
//AExecution ---->                ''
//GlobalExecution ----->          ''
//callstack

// when a function is called , memory is created for that fucntion , and after the execution completed that created memory completely erased , now those variables can't be found anymore. It continuously goeson at every function call.

//! closure

//? is a function , which can access the scope of the parent function after the complete execution of parent function

const Counter = () => {
    let count = 0;

     return () => {
        count++;
        console.log(count);
     };
};

const child = Counter();  //{count:0} ---->closure1
const child1 = Counter();   //{count:0} --->closure2

child();//1  {count:0++=1}
child();//2 {count:1++=2 }
child1();//1 {count:0++=1}


//increment, decrement and show count

const Counter1 = () => {
    let count = 0;
    
    //! decrement
     const decrement = () => {
        count--;
        console.log(count);
    }
     

    //! return count
    const show = () => {
        console.log(count);
    }

    //! increment
     const increment = () => {
        count++;
        console.log(count);
      }

    //  return [increment, decrement, show];
     return{
        increment,
        decrement,
        show,
     };

     };


const ch = Counter1();
const ch1 = Counter1();

console.log(ch);
ch.decrement();
ch.increment();
ch.increment();

ch1.show();
// ch[0]();
// ch[1]();
// ch[2]();