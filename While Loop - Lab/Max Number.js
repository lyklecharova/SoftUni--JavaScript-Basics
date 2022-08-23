function maxNumbers(input) {
  let index = 0;
  let commad = input[index];
  index += 1;

  let maxNum = Number.MIN_SAFE_INTEGER;

  while (commad !== "Stop") {
    let num = Number(commad);
    if (maxNum < num) {
      maxNum = num;
    }
    commad = input[index];
    index += 1;
  }
  console.log(maxNum);
}
