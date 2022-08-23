function shopping(input) {
    let budget = Number(input[0]);
    let countVideocards = Number(input[1]);
    let countCPU = Number(input[2]);
    let countRAMMemory = Number(input[3]);

    let sumVideoCards = countVideocards * 250;
    let CUPprice = countCPU * (sumVideoCards * 0.35);
    let RAMprice = countRAMMemory * (sumVideoCards * 0.10);

    let totalSum = sumVideoCards + CUPprice + RAMprice;

    if (countVideocards > countCPU) {
        totalSum *= 0.85;
    }

    let difference = Math.abs(totalSum - budget);

    if (totalSum <= budget) {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
}
