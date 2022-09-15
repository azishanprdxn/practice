const fs = require('fs');

const filePath = './codility/files/example.in';
const outputPath = './codility/files/example.out';

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

const createDictionary = (lines, index) => {
  let tempDictionary = {};
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLowerCase();
    second = second.toLowerCase();

    if (!tempDictionary[first]) {
      tempDictionary[first] = [second];
    } else {
      tempDictionary[first] = [...tempDictionary[first], second];
      const item = tempDictionary[first][0];
      if (index === 0) {
        console.log(tempDictionary[item], i);
      }
      if (tempDictionary[item].includes(first)) {
        tempDictionary[item] = [...tempDictionary[item], second];
      }
    }

    if (!tempDictionary[second]) {
      tempDictionary[second] = [first];
    } else {
      tempDictionary[second] = [...tempDictionary[second], first];
      const item = tempDictionary[second][0];
      if (tempDictionary[item].includes(second)) {
        tempDictionary[item] = [...tempDictionary[item], first];
      }
    }
  }

  return tempDictionary;
};

const resolveQuery = (lines, dict) => {
  for (let i = 0; i < lines.length; i++) {
    let [first, second] = lines[i].split(' ');
    first = first.toLocaleLowerCase();
    second = second.toLocaleLowerCase();
    if (
      dict[first]?.includes(second) ||
      dict[second]?.includes(first) ||
      first === second
    ) {
      output.push('synonyms');
    } else {
      output.push('different');
    }
  }
};

for (let index = 0; index < cases.length; index++) {
  item = linesObject[cases[index]];
  if (index === 0 || index % 2 === 0) {
    dictionary = createDictionary(item, index);
    // console.log(dictionary);
  } else {
    resolveQuery(item, dictionary);
    counter++;
    if (counter === testCases) break;
  }
}

fs.writeFileSync(outputPath, output.join('\n'));
// console.log(output.join('\n'));
