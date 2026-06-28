//! OS
import os from "os";  // core module of node

// console.log(os.cpus().length);
// console.log(os.arch());
// console.log(os.machine());
// console.log(os.freemem());
// console.log(os.type());
// console.log(os.platform());

// console.log(os.userInfo());

//! path
import path from "path";

// console.log(path.join('server','uploads', 'images','1.jpg')); // server\uploads\images\1.jpg

const a = path.join('../','server','uploads', 'images','1.jpg');
// console.log(a);

const filePath = path.resolve('./index.js');
// console.log(filePath);  // provide absolute path


// console.log(path.relative("./","../TS/index.js"));  // from - to :- path 

// console.log(path.basename(filePath)); // filename only
// console.log(path.dirname(filePath)); // foldername dir
// console.log(path.extname(filePath)); // extention only

//! fs => file system

import fs from "fs";

//* read file

//? async

// console.log("start");

// fs.readFile('./math.js', 'utf-8', (error,data)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(data);
// });




//? sync

// const data = fs.readFileSync("./package.json", "utf-8");
// console.log(data);

// console.log("end");

// fs.writeFile('./file.txt', "this is text file content.", (error) => {
//     if(error){
//         console.log(error);
//         return;
//     }

//     console.log("write complete");
// });     //? if file not exist new file created, if exist then update the content


// fs.appendFile('./file.txt', "this is text file content.\n", (error) => {
//     if(error){
//         console.log(error);
//         return;
//     }

//     console.log("write complete");
// }); 


// if (fs.existsSync("./file.txt")) {

//     fs.unlinkSync("./file.txt");
// }

// fs.mkdir("src",(error) => {
//     if(error){
//         return;
//     }
//     console.log("folder created");
// });

//nested folder at once 

fs.mkdir("./src/controllers",{recursive: true},(error) => {
    if(error){
        return;
    }
    console.log("folder created");
});

//rmdir , copyFile , rename , move

//! http module
// next file
