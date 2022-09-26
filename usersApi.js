const http = require('http');

const data = require('./usersApiData');

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'Application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4200);