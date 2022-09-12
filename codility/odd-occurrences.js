const solution = (A) => {
  const array = A;
  let initial = 0;

  for (let i = initial + 1; i < array.length; i++) {
    if (array[initial] === array[i]) {
      array.splice(initial, 1);
      array.splice(i - 1, 1);

      i = initial;
    }
  }

  console.log(array[0]);

  return array[0];
};

const a = [9, 3, 9, 3, 9, 7, 9];

solution(a);
