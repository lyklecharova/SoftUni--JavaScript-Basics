function repainting(input) {
    neededNylon = Number(input[0]);
    neededDye = Number(input[1]);
    quantityThinner = Number(input[2]);
    hours = Number(input[3]);

    nylon = 1.50;
    dye = 14.50;
    thinner = 5;
    bags = 0.40;

    let priceNylon = (neededNylon + 2) * nylon;
    let priceDye = (neededDye + (0.1 * neededDye)) * dye;
    let priceThinner = quantityThinner * thinner;

    let totalSum = priceNylon + priceDye + priceThinner + bags;
    let sumMasters = (totalSum * (30 / 100)) * hours;
    let finalSum = totalSum + sumMasters;
    console.log(finalSum);
}
