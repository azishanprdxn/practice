const fs = require('fs');

const filePath = './codility/files/example_big.in';
const outputPath = './codility/files/example_big.out';

const fileData = fs.readFileSync(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  return data;
});

const lines = fileData.split('\n').filter((item) => item);
const testCases = lines.shift() * 1;
let cases = [];
let linesObject = {};
let counter = 0;
let dictionary = {};
let output = [];

let iter = 0;
for (let i = 0; i < lines.length; i++) {
  if (!isNaN(lines[i])) {
    lineNum = `${iter} - ${lines[i]}`;
    cases.push(`${iter} - ${lines[i]}`);
    linesObject[lineNum] = [];
    iter++;
  } else {
    linesObject[lineNum] =
      linesObject[lineNum].length === 0
        ? [lines[i]]
        : [...linesObject[lineNum], lines[i]];
  }
}

const createDictionary = (lines, index) => {
  let tempDictionary = {};
  let iterator = 0;
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLowerCase();
    second = second.toLowerCase();

    if (first === second) {
    } else if (first in tempDictionary && second in tempDictionary) {
      let dKeyOld = tempDictionary[first];
      let dValueOld = tempDictionary[second];
      for (const [key, value] of Object.entries(tempDictionary)) {
        if (value === dValueOld || value === dKeyOld) {
          tempDictionary[key] = iterator;
        }
      }
      iterator++;
    } else if (first in tempDictionary) {
      if (!(second in tempDictionary)) {
        tempDictionary[second] = tempDictionary[first];
      }
    } else if (second in tempDictionary) {
      if (!(first in tempDictionary)) {
        tempDictionary[first] = tempDictionary[second];
      }
    } else {
      tempDictionary[first] = iterator;
      tempDictionary[second] = iterator;

      iterator++;
    }
  }
  if (index === 0) {
    console.log(tempDictionary);
  }

  return tempDictionary;
};

const resolveQuery = (lines, dict, index) => {
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLowerCase();
    second = second.toLowerCase();

    if (dict && first in dict && second in dict) {
      if (first in dict === second in dict) {
        output.push('synonyms');
      } else {
        output.push('different');
      }
    } else {
      if (first === second) {
        output.push('synonyms');
      } else {
        output.push('different');
      }
    }
  }
};

for (let index = 0; index < cases.length; index++) {
  item = linesObject[cases[index]];
  if (index === 0 || index % 2 === 0) {
    dictionary = createDictionary(item, index);
  } else {
    resolveQuery(item, dictionary, index);
    counter++;

    if (counter === testCases) break;
  }
}

fs.writeFileSync(outputPath, output.join('\n'));
// console.log(output.join('\n'));
