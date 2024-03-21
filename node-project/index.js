// console.log("Begin");
// const http = require('http');

// http.createServer((req,res)=>{
// res.write("nodeProject");
// res.end();
// }).listen(3000);

const express = require('express');
const path = require('path');
const app=express();

const pathToPublic = path.join(__dirname,"public")

app.use(express.static(pathToPublic));

app.listen(3001);
