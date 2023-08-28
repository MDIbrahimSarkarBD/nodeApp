const path = require('path');
const dirlist = require('./csdb-modiule/derectoryfuc.js');
const { readFile } = require('fs');
http = require('http')
const datalist = dirlist.listDirectoryItemsSync('c:\\');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        // html file load
        const indexPath =  path.join(__dirname,'index.html');
        readFile(indexPath, 'utf-8', (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }else if (req.url == '/data') {
        const jsondat = JSON.stringify(datalist);
        
       res.writeHead(200, {'Content-Type': 'application/json'});
       console.log(typeof jsondat);
      
       res.end(jsondat);

    }else if (req.url === '/script.js') {
        const jsPath = path.join(__dirname, 'script.js');
        readFile(jsPath, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
          }
        });
      }
      else if (req.url === '/styles.css') {

        const cssPath = path.join(__dirname,'styles.css');
        readFile(cssPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
                return;
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.end(data);

                }
    
      });
    }
});

server.listen(4000);

