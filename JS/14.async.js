//! async

// sync tasks complete the current task by blocking further tasks
console.log("start");
console.log("task1");
console.log("task2");
console.log("end");

// but async 
//* setTimeout 
// setTimeout(callback, timer,.....args)

console.log("start");
console.log("task1");
const timer_id = setTimeout((num,name) => {
    console.log("task2", num, name);
}, 2000, 23, "john");

console.log(timer_id._timerArgs);
console.log(timer_id._idleNext);
// clearTimeout(timer_id);
console.log("end");


//* setInterval

let i=0;
const id = setInterval(()=> {
    console.log(i);
    if (i === 10){
        clearInterval(id);
    }
    i++;
},1000);
console.log("end");

//! countdown timer

// hr , min ,  sec

// 1 : 12 : 09  ---> setInterval

//todo: callback, promise

