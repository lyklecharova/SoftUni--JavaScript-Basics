function newHouse(input) {
    let typeOfFlowers = String(input[0]);
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let nededMoney = 0;

    if (typeOfFlowers === "Roses") {
        nededMoney = countFlowers * 5;
        if (countFlowers > 80) {
            nededMoney *= 0.9;
        }
    } else if (typeOfFlowers === "Dahlias") {
        nededMoney = countFlowers * 3.80;
        if (countFlowers > 90) {
            nededMoney *= 0.85;
        }
    } else if (typeOfFlowers === "Tulips") {
        nededMoney = countFlowers * 2.80;
        if (countFlowers > 80) {
            nededMoney *= 0.85;
        }
    } else if (typeOfFlowers === "Narcissus") {
        nededMoney = countFlowers * 3;
        if (countFlowers < 120) {
            nededMoney *= 1.15;
        }
    } else if (typeOfFlowers === "Gladiolus") {
        nededMoney = countFlowers * 2.50;
        if (countFlowers < 80) {
            nededMoney *= 1.20
        }
    }

    if (budget >= nededMoney) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeOfFlowers} and ${(budget - nededMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(nededMoney - budget).toFixed(2)} leva more.`);
    }

}

