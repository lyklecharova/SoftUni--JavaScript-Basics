function foodDelivery(input) {
    countChikenMenu = Number(input[0]);
    countMenuFish = Number(input[1]);
    countVegetariansMenu = Number(input[2]);

    chikenMenu = 10.35;
    fishMenu = 12.40;
    vegetariansMenu = 8.15;
    discount = 2.50;

    let priceMenuChiken = countChikenMenu * chikenMenu;
    let priceMenuFish = countMenuFish * fishMenu;
    let priceMenuVegetarians = countVegetariansMenu * vegetariansMenu;

    let totalPriceMenu = priceMenuChiken + priceMenuFish + priceMenuVegetarians;
    let priceDessert = (20 / 100) * totalPriceMenu;
    let TotalPriceOrdered = totalPriceMenu + priceDessert + discount;
    console.log(`${TotalPriceOrdered}`);
}
