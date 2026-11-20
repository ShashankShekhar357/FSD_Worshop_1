const fs=require("fs");
const { CLIENT_RENEG_LIMIT } = require("tls");
fs.writeFile("student.txt","Hello, have a nice day",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created!")
    }
});
fs.readFile("student.txt","utf-8",(err,data)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Content of File:")
        console.log(data)
    }
});
fs.appendFile("student.txt","File of 3rd Semester",(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("File successfully appended!")
    }
});
fs.unlink("student.txt",(err)=>{
    if (err) console.log(err)
    else{
        console.log("File Deleted!")
    }
});