const fs = require('fs');

const filePath = './large-data/itcont.txt';
let count = 0;

fs.createReadStream(filePath, { encoding: 'utf-8' })
  .on('data', (chunk) => {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === '\n') {
        count++;
      }
    }
  })
  .on('end', () => {
    console.log(count);
  });

// fs.createReadStream(filePath)
//   .on('data', (chunk) => {
//     let index = -1;
//     while ((index = chunk.indexOf(10, index + 1)) > -1) {
//       // console.log(index);
//       count++;
//     }
//   })
//   .on('end', () => {
//     console.log(count);
//   });
