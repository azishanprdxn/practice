const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const { writeToPath, writeToString } = require('@fast-csv/format');

const newCustomer = {
  name: 'Newbie Corp.',
  order_count: 0,
  address: 'Po Box City',
};

const jsonString = JSON.stringify(newCustomer, null, 2);
console.log(jsonString);
fs.writeFile('./newCustomer.json', jsonString, (err) => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('Successfully wrote file');
  }
});

// fs.readFile('./tmp.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.log('File read failed:', err);
//     return;
//   }

//   try {
//     const data = JSON.parse(jsonString);
//     const customer = data[0];
//     console.log(`Customer ${customer.name} address is: ${customer.address}`);
//   } catch (err) {
//     console.log(err);
//   }
// });

// const rows = [
//   { id: 'Id', name: 'Alphabet' },
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
//   { id: 3, name: 'C' },
//   { id: 4, name: 'D' },
//   { id: 5, name: 'E' },
//   { id: 6, name: 'F' },
// ];

// writeToPath(path.resolve(__dirname, 'tmp.csv'), rows)
//   .on('error', (err) => console.error(err))
//   .on('finish', () => console.log('Done writing.'));

// writeToString(rows).then((data) => console.log(data));

// const data = [];
// fs.createReadStream(path.resolve(__dirname, './', 'tmp.csv'))
//   .pipe(csv.parse({ headers: true, maxRows: 5 }))
//   .on('error', (error) => console.error(error))
//   .on('data', (row) => data.push(row))
//   .on('end', () => console.table(data));
