console.log("Begin");
const http = require('http');

http.createServer((req,res)=>{
res.write("nodeProject");
res.end();
}).listen(3000);