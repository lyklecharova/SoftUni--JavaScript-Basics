function toyShop(input) {
    priceExcursion = Number(input[0]);
    countPuzzles = Number(input[1]);
    countTalkingDolls = Number(input[2]);
    countTeddyBears = Number(input[3]);
    countMinions = Number(input[4]);
    countTrucks = Number(input[5]);

    puzzle = 2.60;
    dolls = 3;
    bear = 4.10;
    minion = 8.20;
    truck = 2;

    let sum = (countPuzzles * puzzle) + (countTalkingDolls * dolls) + (countTeddyBears * bear) +
        (countMinions * minion) + (countTrucks * truck);

    let countToys = countPuzzles + countTalkingDolls + countTeddyBears +
        countMinions + countTrucks;

    if (countToys >= 50) {
        sum *= 0.75;
    }

    sum *= 0.90;

    let difference = Math.abs(priceExcursion - sum);

    if (priceExcursion <= sum) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}
