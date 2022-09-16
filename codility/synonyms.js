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

lines.forEach((item) => {
  if (!isNaN(item)) {
    lineNum = item;
    cases.push(item);
    linesObject[lineNum] = [];
  } else {
    linesObject[lineNum] =
      linesObject[lineNum].length === 0
        ? [item]
        : [...linesObject[lineNum], item];
  }
});

obj = {
  first: 1,
  second: 0,
  third: 1,
  fourth: 2,
  fifth: 1,
};

const createDictionary = (lines, index) => {
  let tempDictionary = {};
  let iterator = 0;
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLowerCase();
    second = second.toLowerCase();

    if (index === 0) {
      if (first === second) {
      } else if (first in tempDictionary && second in tempDictionary) {
        let dkeyOld = tempDictionary[first];
        let dvalueOld = tempDictionary[second];
        for (const [key, value] of Object.entries(tempDictionary)) {
          if (value === dvalueOld || value === dkeyOld) {
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
  }

  // console.log(tempDictionary);
  return tempDictionary;
};

const resolveQuery = (lines, dict, index) => {
  // if (index === 1) {
  //   console.log('dict', dict);
  // }
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLowerCase();
    second = second.toLowerCase();
    if (dict && first in dict && second in dict) {
      if (dict[first] === dict[second]) {
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
    if (index === 1) {
      resolveQuery(item, dictionary, index);
    }
    counter++;
    if (counter === testCases) break;
  }
}

// fs.writeFileSync(outputPath, output.join('\n'));
console.log(output.join('\n'));
