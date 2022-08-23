function braceletStand(input) {
  let pocketMoney = Number(input[0]); // for day
  let moneyEarn = Number(input[1]); // per day of sales
  let expense = Number(input[2]); // for the whole period
  let priceForGift = Number(input[3]);

  let savedMoney = 5 * pocketMoney;
  let winsMoney = 5 * moneyEarn;
  let totalWinsMoney = savedMoney + winsMoney;

  let totalExpense = totalWinsMoney - expense;

  if (totalExpense > priceForGift) {
    console.log(
      `Profit: ${totalExpense.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    console.log(
      `Insufficient money: ${(priceForGift - totalExpense).toFixed(2)} BGN.`
    );
  }
}
braceletStand(["5.12", "32.05", "15", "150"]);
