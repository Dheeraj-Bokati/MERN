import http from "http";

//* creating http server

const server = http.createServer((req, res )=>{
    // console.log(req.headers);
    // console.log("REQ");
    console.log(req.url);
    console.log(req.method); // methods => GET, POST, PUT, PATCH, DELETE
    
    if(req.url === '/'){
         res.end("<h1>Hello from Server</h1>");
    } else if(req.url === '/users'){
        if(req.method === 'GET'){
            // db op
            // process
         res.end("<h1>All Users Lists</h1>");
        } else if ( req.method === 'POST') {
            // data
            // validate
            // process
            // db op
            // process
           res.end("<h1>User created</h1>"); 
        } else if ( req.method === 'PUT') {

           res.end("<h1>User updated</h1>"); 
        } else if ( req.method === 'DELETE') {

           res.end("<h1>User Deleted</h1>"); 
        }

    } else if(req.url === '/products'){
         res.end("<h1>All Products Lists</h1>");
    } else if(req.url === '/about'){
         res.end("<h1>About Us</h1>");
    } else if(req.url === '/services'){
         res.end("<h1>All Service Lists</h1>");
    }
   
});

// http://google.com    // http://168.3.4.1

server.listen(8000,()=>{
    //127.0.0.1
    
    console.log("Server is running at http://localhost:8000 ");
    console.log("Press Clt+c to close the server");
});






