const fs = require('fs');

const filePath = './large-data/itcont_2018_20020411_20170529.txt';
const names = [];

fs.createReadStream(filePath, { encoding: 'utf-8' })
  .on('data', (chunk) => {
    const rows = chunk.split('\n');
    for (let i = 0; i < rows.length; i++) {
      const name = rows[i].split('|')[7];
      const firstName = name?.split(', ')[0];
      names.push(firstName);
    }
  })
  .on('end', () => {
    const length = names.length;

    console.log('All names: ', names);

    const mostFrequent = (arr, n) => {
      arr.sort();
      let maxCount = 1;
      let result = arr[0];
      let currentCount = 1;

      for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1]) currentCount++;
        else {
          if (currentCount > maxCount) {
            maxCount = currentCount;
            result = arr[i - 1];
          }
          currentCount = 1;
        }
      }

      // If last element is most frequent
      if (currentCount > maxCount) {
        maxCount = currentCount;
        result = arr[n - 1];
      }

      return result;
    };

    const freq = mostFrequent(names, length);
    let occurrence = 0;

    for (let i = 0; i < length; i++) {
      if (names[i] === freq) {
        occurrence++;
      }
    }

    console.log('Name: ', freq);
    console.log('Occurrence: ', occurrence);
  });
