function vacation(input) {
  let index = 0;
  let moneyNeeded = Number(input[index]);
  index += 1;
  let money = Number(input[index]);
  index += 1;

  let action = String;

  let countSpendDay = 0;
  let totalDay = 0;

  let actionMoney = 0;

  while (countSpendDay !== 5) {
    action = input[index];
    actionMoney = Number(input[index + 1]);
    totalDay += 1;
    if (action === "spend") {
      money -= actionMoney;
      if (money < 0) {
        money = 0;
      }
      countSpendDay += 1;
    } else {
      countSpendDay = 0;
      money += actionMoney;
      if (money >= moneyNeeded) {
        console.log(`You saved the money for ${totalDay} days.`);
        break;
      }
    }
    index += 2;
  }
  if (countSpendDay == 5) {
    console.log("You can't save the money.");
    console.log(`${totalDay}`);
  }
}
