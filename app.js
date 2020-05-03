/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
*/
/*
const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const router = express.Router();

/*
fs.readFile('./temp_data.csv', 'utf-8', (err, temp_data) => {
      if(err) { throw err; }
        console.log("loaded temperature data");
});
fs.readFile('./hum_data.csv', 'utf-8', (err, hum_data) => {
      if(err) { throw err; }
        console.log("loaded humidity data");
});
*/
router.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
        //__dirname : It will resolve to your project folder.
});

router.get('/data/temperature.js',function(req,res){
      res.sendFile(path.join(__dirname+'/data/temperature.js'));
});

router.get('/data/humidity.js',function(req,res){
      res.sendFile(path.join(__dirname+'/data/humidity.js'));
});

router.get('/data/photo.jpg',function(req,res){
      res.sendFile(path.join(__dirname+'/data/photo.jpg'));
});

app.use('/', router);
port = process.env.port || 8081;
app.listen(port);

console.log('Server is up on port ' + port);
