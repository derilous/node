const http = require('http');
const fs = require('fs');
http
  .createServer((req, res) => {
    const readStream = fs.createReadStream('./static-files/index.html');
    // 200 means everything went good with the request
    res.writeHead(200, { 'content-type': 'text/html' });
    readStream.pipe(res);
  })
  .listen(3000);

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello world from nodejs');
//     res.end();
//   } else {
//     res.write('using some other domain');
//     res.end();
//   }
// });

// server.listen('3000');
