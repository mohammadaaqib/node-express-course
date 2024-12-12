const express=require('express');
const app=express();

//route

app.get('/',(req,res)=>{
    res.send("Task Manager is working")
})



const port=3000;

app.listen(port,console.log("server is listening"));
