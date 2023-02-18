 const fs=require("fs");
 const http=require("http");
 const objdata={
    name:"kamlesh",
    age:"30",
    address:"Kunraghat,Gorakhpur-272310"
 }
const jsondata=JSON.stringify(objdata);
console.log(jsondata);
const objd=JSON.parse(jsondata);
objd.gf="radhika opte";
objd.bff="noora fatehi";
console.log(objd);
console.log(objd.name);
console.log(objd.age);
console.log(objd.address);
const n=fs.writeFile("jsondata.json",jsondata,()=>{
    console.log("json added file");
});
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<h1>Response from the home page</h1>");
    }
    else if(req.url=="/about")
    {
        res.end("Response from the about page");
    }
    else if(req.url=="/contacts")
    {
        res.end("Response from the contacts page");
    } 
    else if(req.url=="/jsondata")
    {
        fs.readFile(`${__dirname}/jsondata.json`,"utf-8",(err,data)=>{
            console.log(data);
            const ob=JSON.parse(data);
            console.log(ob[0].name);
        });
    } 
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("Status:404 ! Page not found. ");
    }
}) ;
server.listen(8000,"127.0.0.1",()=>{
    console.log("******localhost:8000 is listening to the server, baby*******");
}); 