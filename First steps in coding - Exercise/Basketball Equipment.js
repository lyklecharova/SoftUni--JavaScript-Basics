function basketballEquipment(inpput) {
    yeardFee = Number(inpput[0]); // for basketball training //

    let priceSneakers = yeardFee - (0.4 * yeardFee);
    let priceTeam = priceSneakers - (0.2 * priceSneakers);
    let priceBall = 0.25 * priceTeam;
    let priceAccessories = 0.2 * priceBall;
    let totalPrice = yeardFee + priceSneakers + priceTeam + priceBall + priceAccessories;
    console.log(totalPrice);

}
