function minNumbers(input) {
  let index = 0;
  let commad = input[index];
  index += 1;

  let minNum = Number.MAX_SAFE_INTEGER;

  while (commad !== "Stop") {
    let num = Number(commad);
    if (minNum > num) {
      minNum = num;
    }
    commad = input[index];
    index += 1;
  }
  console.log(minNum);
}
