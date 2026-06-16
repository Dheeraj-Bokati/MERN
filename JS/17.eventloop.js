//! event loop
// javascript perform async task using event loop , although javascript is sync .

//* call stack

//* web apis : timer , dom events , fetch , promise: {state:pending, onResolve:(){},onReject:(){},finally:(){}} .. geolocation

//* task queue -> FIFO  
//? 1. callback queue / macro task queue
//? 2. microtask queue (more priority)

//* event loop

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
   return response.json();
})
.then((posts) => {
    console.log(posts);
})
.catch((error) => {
    console.log(error);
});

const fetchDatas = async () => {
    try {
        //* fetch posts
        const posts = await ( await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        
        //* fetch comments

        const resp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        const comments = await resp.json();
        console.log(comments);
    }
    catch (error) {
        console.log(error);
    }

    };
    fetchDatas();

console.log("start");

// promise 
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("finally");
//  });

const timer_id = setTimeout ( () => {
    console.log("processing");
}, 2000);

console.log("end");