const solution = (X, Y, D) => {
  const target = Y;
  const jumpDistance = D;
  let current = X;
  let count = 0;

  while (current < target) {
    count += 1;
    current += jumpDistance;
  }

  console.log(count);
  return count;
};

const x = 3;
const y = 999111321;
const d = 2;

solution(x, y, d);
