const fs = require('fs');

// read a file
const readStream = fs.createReadStream('./example.txt', 'utf8');

// write chunk to a file
const writeStream = fs.createWriteStream('./example2.txt');

// the callback function chunk is used everytime we want to get data
readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});
