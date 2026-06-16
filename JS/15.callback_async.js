//* fetch user
console.log("Start");
const getUser = (callback) => {
    setTimeout (()=> {
        console.log("user fetched");
        // console.log({
        //    _id: 1,
        //    name: "Dheeraj",
        //    email: "db@gmail.com",
        //    password: "12345",
        // });
        callback(null, {
            _id: 1,
           name: "Dheeraj",
           email: "db@gmail.com",
           password: "12345",
        });
    },3000);
};

//* get posts
const getPosts = (userId, callback) => {
setTimeout(() => {
    console.log("Posts fetched");
    // console.log([
    //     {
    //         userId: userId,
    //         _id: 1,
    //         title: "Post 1",
    //     },
    //     {
    //         userId: userId,
    //         _id: 2,
    //         title: "Post 2",
    //     },
    //     ]);
    callback (null,
        [
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
},2000);
};
// getUser();
// getPosts(1);


//* get comments

const getComments = (postId, callback) => {   
    setTimeout (() => {
        console.log("Comments fetched");
       callback (null,
       [
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
},1000);
};

//2015
//! callback hell --> solution = promise.
//* pyramid of doom

getUser ((error,user) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("callback user",user);

    getPosts(user._id , (error, posts) => {
        if (error) {
        console.log(error);
        return;
    }
    console.log("callback posts ",posts);

        getComments(posts[0]._id, (error, comments)=>{
            if (error) {
        console.log(error);
        return;
        }
           console.log("callback comments ",comments);
        });
    });
});


console.log("End");