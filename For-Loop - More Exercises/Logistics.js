function logistics(input) {
    let countFreight = Number(input[0]);


    let averageFreight = 0;


    let minibusTone = 0;
    let truckTone = 0;
    let trainTone = 0;

    let minibusPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;

    let totalTone = 0;


    for (let i = 1; i < countFreight + 1; i++) {
        let cargoTonnage = Number(input[i]);

        if (cargoTonnage <= 3) {
            minibusTone += cargoTonnage;
            minibusPrice += cargoTonnage * 200;
        }
        if (cargoTonnage > 3 && cargoTonnage <= 11) {
            truckTone += cargoTonnage;
            truckPrice += cargoTonnage * 175;
        }
        if (cargoTonnage >= 12) {
            trainTone += cargoTonnage;
            trainPrice += cargoTonnage * 120;
        }


        totalTone += cargoTonnage;
    }

    averageFreight = (minibusPrice + truckPrice + trainPrice) / totalTone;



    console.log(averageFreight.toFixed(2));
    console.log(`${(minibusTone / totalTone * 100).toFixed(2)}%`);
    console.log(`${(truckTone / totalTone * 100).toFixed(2)}%`);
    console.log(`${(trainTone / totalTone * 100).toFixed(2)}%`);
}
