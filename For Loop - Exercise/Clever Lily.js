function cleverLily(input) {
  let ages = Number(input[0]);
  let priceWashingMachine = Number(input[1]);
  let singlePriceToy = Number(input[2]);

  let toys = 0; // receive toys
  let evenBirthday = 0; // receive money
  let totalMoney = 0;
  let totalSum = 0;

  for (let i = 1; i <= ages; i++) {
    if (i % 2 === 0) {
      evenBirthday++;
      totalSum = evenBirthday * 10 - 1;
      totalMoney += totalSum;
    } else {
      toys++;
    }
  }
  totalMoney += singlePriceToy * toys;

  if (totalMoney >= priceWashingMachine) {
    console.log(`Yes! ${(totalMoney - priceWashingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWashingMachine - totalMoney).toFixed(2)}`);
  }
}
