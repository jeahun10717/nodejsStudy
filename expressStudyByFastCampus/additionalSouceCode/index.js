const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {'Context-Type' : 'text/plain'})
    response.write('Hello Server')
    response.end();
}).listen(3000);