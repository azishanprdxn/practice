function sumUpArray(A) {
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  return sum;
}

const solution = (A) => {
  let p = 1;
  let sumPartOne = A[p - 1];
  let sumPartTwo = sumUpArray(A.slice(p, A.length));
  let diff = Math.abs(sumPartOne - sumPartTwo);

  for (p; p < A.length - 1; p++) {
    sumPartOne += A[p];
    sumPartTwo -= A[p];
    const tempDiff = Math.abs(sumPartOne - sumPartTwo);
    if (tempDiff < diff) {
      diff = tempDiff;
    }
  }

  console.log(diff);
  return diff;
};

const a = [1, 1];

solution(a);
