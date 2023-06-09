const fs = require('fs');

// fs.mkdir('tutorial', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile('./tutorial/example.txt', '123', (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('successfully created file');
//       }
//     });
//   }
// });

// // unlink deletes files
// fs.unlink('./tutorial/example.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     //   rmdir removes empty folders
//     fs.rmdir('tutorial', (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('removed');
//       }
//     });
//   }
// });

fs.readdir('example', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    // loop to delete all files within a directory
    for (let file of files) {
      fs.unlink('./example/' + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('successfully deleted file');
        }
      });
    }
  }
});
