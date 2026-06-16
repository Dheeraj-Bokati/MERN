//! promise

// state of promise
//1. pending
//2. fulfilled
//3. rejected

const promise = new Promise((resolve, reject) => {
    //async task
    setTimeout(() => {
      //  resolve({message: "success"});
      reject({message: "error"});
    },3000);
});

console.log("Start");
console.log(promise);

//! handling promise
let isLoading = true;

promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("finally");
 });

 const promiseFunc = () => {
    return new Promise((resolve, reject) => {
        //async task
    setTimeout(() => {
        resolve({message: "success"});
       // reject({message: "error"});
    },3000);
});
};

promiseFunc()
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("finally");
 });


const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject({message :"User fetch failed"});
            } else {
            resolve({
                _id: 1,
                name: "Dheeraj",
                email: "db@gmail.com",
                password: "12345",
            });
        }
        },3000);
    
    });
};

const getPosts = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject({message :"Posts fetch failed"});
            } else {
            resolve([
                {
                    userId: userId,
                    _id: 1,
                    title: "Post 1",
                },
                {
                    userId: userId,
                    _id: 2,
                    title: "Post 2",
                },
                ]);
        }
        },2000);
    
    });
};

const getComments = (postId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject({message :"Comments fetch failed"});
            } else {
            resolve([
                {
                    postId: postId,
                    _id: 1,
                    text: "Comment",
                },
                {
                    postId: postId,
                    _id: 2,
                    text: "Comment",
                }
        ]);
    }
        },1000);
    
    });
};

//! promise chaining

getUser()
.then((data) => {
    console.log(data);
    return getPosts(data._id);
})
.then((data) => {
    console.log(data);
    return getComments(data[0]._id);
})

.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("finally");
 });

 getPosts(1)
 .then((data) => {
    console.log(data);
})
 .catch((error) => {
    console.log(error);
})
 .finally(() => {
    console.log("finally");
 });

 getComments(1)
 .then((data) => {
    console.log(data);
})
 .catch((error) => {
    console.log(error);
})
 .finally(() => {
    console.log("finally");
 });

 // getUser()
 // .then ((user) => { ....
 // })
 // .then ((posts) => { ....
 // })
 // .then ((comments) => { ....
 // })
 // .catch((error) => { ....
 // });



//! async function , async/await ,  try/catch

const fetchData = async () => {
  try {
    const user = await getUser();
  console.log(user);
  const posts = await getPosts(user._id);
  console.log(posts);
  const comments = await getComments(posts[0]._id);
  console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

fetchData();

//! fetch()

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments?postId=1 => posts [0].id

//* promise chain

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



//* async 

const fetchTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todos = await response.json();
        console.log(todos);
    } catch (error) {
        console.log(error);
    }
};

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

fetchTodo();
fetchDatas();




console.log("End");