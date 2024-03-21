const express = require('express');
const app=express();

app.get("",(req,res)=>{
    console.warn(req.query.name);
    res.send("It is what it is "+ req.query.name)
}).listen(3000)