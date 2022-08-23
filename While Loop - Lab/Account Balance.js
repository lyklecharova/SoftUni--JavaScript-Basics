function accountBalance(input) {
  let index = 0;
  let command = input[index];
  index += 1;

  let total = 0;

  while (command !== "NoMoreMoney") {
    let sum = Number(command);
    if (sum < 0) {
      console.log("Invalid operation!");
      break;
    }
    total += sum;
    console.log(`Increase: ${sum.toFixed(2)}`);

    command = input[index];
    index += 1;
  }
  console.log(`Total: ${total.toFixed(2)}`);
}

