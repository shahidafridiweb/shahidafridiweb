const express = require('express');
const app=express();

app.get("",(req,res)=>{
    console.warn(req.query.name?req.query.name:"Shahid");
    res.send(`<h1>It is what it is ${req.query.name?req.query.name:"Shahid" }</h1>
    <button><a href='/about'>Go to About </a></button>`)
});

app.get("/about",(req,res)=>{
    res.send(`<h1>This is about Page</h1>
    <button><a href='/'>Go to Home </a></button>`)
});

app.listen(3000);