function equalPairs(input) {
  index = 0;
  const numberOfPairs = Number(input[index++]);
  let firstNum = 0;
  let secondNum = 0;
  let sum = 0;
  let diff = 0;
  let valueMin = 100;
  let valueMax = -100;
  let max1 = 0;
  let min1 = 0;

  for (let i = 0; i < numberOfPairs; i++) {
    firstNum = Number(input[index++]);
    secondNum = Number(input[index++]);
    sum = firstNum + secondNum;

    if (sum > valueMax) {
      valueMax = sum;
    } else if (sum < valueMax) {
      max1 = sum;
    }

    if (sum < valueMin) {
      valueMin = sum;
    } else if (sum > valueMin) {
      min1 = sum;
    }
  }

  diff = Math.abs(valueMin - valueMax);
  let diff2 = Math.abs(min1 - max1);
  if (valueMin === valueMax) {
    console.log(`Yes, value=${valueMin}`);
  } else {
    if (diff > diff2 && numberOfPairs > 3) {
      console.log(`No, maxdiff=${diff2}`);
    } else {
      console.log(`No, maxdiff=${diff}`);
    }
  }
}