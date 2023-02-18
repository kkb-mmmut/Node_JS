//import the file system
const fs=require('fs'); 
//making the new folder or creating the new foldder
// fs.mkdirSync("new_folder_name");

//rename the existing folder name
fs.renameSync("thapa","nodejs");

//overwerite the file message 
fs.writeFileSync("text.txt","this is thte new file");

//write the file without overwriting it into the fille 
fs.appendFileSync("text.txt","this is the new line added to the file systme.");              

