function averageNumber(input) {
  let n = Number(input[0]);

  let sum = 0;
  let average = 0;
  for (let i = 1; i < n + 1; i++) {
    let number = Number(input[i]);
    sum += number;
  }
  average = sum / n;
  console.log(average.toFixed(2));
}
