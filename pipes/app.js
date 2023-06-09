const fs = require('fs');
// zlib is a compression library. it will compress the file
const zlib = require('zlib');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.gz');
// creatGunzip will compress instead
const gzip = zlib.createGzip();

// pipe will do what writestream and readstream do, but simpler.
//  Here, pipe is first taking the example1 file from readstream and sending it to gzip to compress.
// gzip returns the file and then pipe takes it again to write as example2.gz (compressed) with writeStream.

readStream.pipe(gzip).pipe(writeStream);
