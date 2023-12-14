const express=require("express");
const app=express();
var path=require("path");
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
})
app.listen(3000,(req,res)=>{
    console.log("Done");
})