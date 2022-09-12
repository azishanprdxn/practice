const fs = require('fs');
const readline = require('readline');
const Stream = require('stream');

const inStream = fs.createReadStream('./large-data/itcont.txt');
const outStream = new Stream();
outStream.readable = true;
outStream.writable = true;

let rows = [];

const rl = readline.createInterface({
  input: inStream,
  output: outStream,
  terminal: false,
});

rl.on('line', (line) => {
  console.log(line);
  // data += line;
  //Do your stuff ...
  //Then write to outstream
  // rl.write(cubestuff);
});

rl.on('end', () => {
  console.log(rows);
});
