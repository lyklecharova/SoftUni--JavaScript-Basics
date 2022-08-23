function neededSum(input) {
    let metresYardGreening = Number(input[0]);

    let wholeYard = metresYardGreening * 7.61 // 7.61 - price for 1 square meter
    let discount = 0.18 * wholeYard;
    let finalPrice = wholeYard - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
