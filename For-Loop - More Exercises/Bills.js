function bills(input) {
  let months = Number(input[0]);

  let water = 20;
  let internetBill = 15;
  let other = 0;

  let waterPrice = 0;
  let internetPrice = 0;
  let electricityPrice = 0;
  let otherPrice = 0;
  let average = 0;

  for (let i = 1; i <= months; i++) {
    let electricityBill = Number(input[i]);
    electricityPrice += electricityBill;
    waterPrice = water * months;
    internetPrice = internetBill * months;
    other = (electricityBill + water + internetBill) * 1.2;
    otherPrice += other;
  }
  average =
    (electricityPrice + waterPrice + internetPrice + otherPrice) / months;
  console.log(`Electricity: ${electricityPrice.toFixed(2)} lv`);
  console.log(`Water: ${waterPrice.toFixed(2)} lv`);
  console.log(`Internet: ${internetPrice.toFixed(2)} lv`);
  console.log(`Other: ${otherPrice.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}

