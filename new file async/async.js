const fs=require("fs");
// fs.writeFileSync("ram.txt","This is the ram's file system.");
fs.readFile("ram.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("this is sysnc file systme");
