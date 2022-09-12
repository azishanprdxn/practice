const solution = (A, K) => {
  const array = A;

  if (array.length < 1) {
    return [];
  }

  for (let i = 0; i < K; i++) {
    popped = array.pop();
    array.unshift(popped);
  }

  return array;
};

const a = [1, 2, 3, 4, 5];
const k = 5;

solution(a, k);
