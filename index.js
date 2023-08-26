const http  = require('http');
const hostName = '192.168.0.105';
const port =  3000;

const server = http.createServer((req,res)={
    
});

server.listen(port);
console.log("server adress: " + hostName + ':' + 'port');