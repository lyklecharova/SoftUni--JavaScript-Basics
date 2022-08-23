function dishwasher(input) {
  let index = 0;
  let command = input[index];

  let countBottle = Number(input[index]);
  index++;

  let amountPreparation = 0;

  let leftoverDeterget = 0;
  let spentPreparationForDish = 0;
  let spentPreparationForPots = 0;

  let totalPots = 0
  let totalDish = 0;

  let detergentDish = 5;
  let detergentPots = 15;
  let detergent = 750;

  amountPreparation = countBottle * detergent;

  while (command !== "End") {

    if (amountPreparation < 0) {
      console.log(`Not enough detergent, ${Math.abs(amountPreparation)} ml. more necessary!`);
      break;
    }

    if (index % 3 === 0) {
      numberPots = Number(input[index]);
      spentPreparationForPots = numberPots * detergentPots;
      amountPreparation = (amountPreparation - spentPreparationForPots);
      totalPots += numberPots;
      leftoverDeterget = spentPreparationForPots;

    } else {
      numberDish = Number(input[index]);
      spentPreparationForDish = numberDish * detergentDish;
      amountPreparation = (amountPreparation - spentPreparationForDish);
      totalDish += numberDish;
      leftoverDeterget = spentPreparationForDish;

    }


    index++;
    command = input[index];
  }

  if (amountPreparation >= 0) {
    console.log("Detergent was enough!");
    console.log(`${totalDish} dishes and ${numberPots} pots were washed.`);
    console.log(`Leftover detergent ${amountPreparation} ml.`);
  }
}
