function petShop(input) {
    let countDogsFood = Number(input[0]);
    let countCatsFood = Number(input[1]);

    let priceDogsFood = 2.50;
    let priceCatsFood = 4;
    let DogsFood = countDogsFood * priceDogsFood;
    let CatsFood = countCatsFood * priceCatsFood;
    let neededMoney = DogsFood + CatsFood;
    console.log(`${neededMoney}.lv`);
}