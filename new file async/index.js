// const kam="kamlesh kjmarbind";
// console.log("this is the node js welcome to the node js ",kam); 
const fs=require("fs");
// fs.writeFileSync("read.txt","Welcome to the node js of the  kamlesh software system .");
const buf_imp=fs.readFileSync("read.txt");
console.log(buf_imp.toString()); 
fs.renameSync("read.txt","text.txt");

// CRUD Operation
// create 
// Readd 
// Update 
// Delete 

