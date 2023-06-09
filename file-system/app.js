const fs = require('fs');

// // CREATE A FILE

// fs.writeFile('example.txt', 'this is an example', (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('File successfully created');
//     fs.readFile('example.txt', 'utf8', (err, file) => {
//       if (err) console.log(err);
//       else console.log(file);
//     });
//   }
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//   if (err) console.log(err);
//   else console.log('Saved');
// });

// fs.appendFile('example2.txt', 'Some new data being appended', (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log('Success');
// });

// unlink is deleting the file
fs.unlink('example2.txt', (err) => {
  if (err) console.log(err);
  else console.log('unlink complete');
});
