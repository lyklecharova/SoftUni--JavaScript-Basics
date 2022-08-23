function movie(input) {
    let budget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceClothing = Number(input[2]); // for one statists

    let sumScenery = budget * 0.1;
    let sumClothing = countStatists * priceClothing;

    if (countStatists > 150) {
        sumClothing *= 0.9;
    }

    let totalSumForMovie = sumScenery + sumClothing;

    if (totalSumForMovie > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSumForMovie - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSumForMovie).toFixed(2)} leva left.`);

    }
}

