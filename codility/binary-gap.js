const solution = (n) => {
  const binary = n.toString(2);
  const binaryArray = binary.split('');
  const countArray = [];
  let count = 0;

  for (let i = 0; i < binaryArray.length; i++) {
    const number = +binaryArray[i];
    if (number === 0) {
      count += 1;
    }
    if (number === 1) {
      if (count > 0) {
        countArray.push(count);
      }
      count = 0;
    }
  }

  console.log('Number: ', n);
  console.log('Binary: ', +binary);
  console.log('Number of Gaps: ', countArray.length);
  console.log('All Gap Data: ', countArray);
  console.log(
    'Longest Binary Gap: ',
    countArray.length > 0 ? Math.max(...countArray) : 0
  );
};

solution(1041);
