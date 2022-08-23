function suppliesForSchool(input) {
    countPensils = Number(input[0]);
    countMarkers = Number(input[1]);
    litresPreparation = Number(input[2]); // for cleaning the board //
    percent = Number(input[3]); // discount //

    pencils = 5.80;
    markers = 7.20;
    preparation = 1.20; // for litre //

    let pricePencils = countPensils * pencils;
    let priceMarkers = countMarkers * markers;
    let pricePreparation = litresPreparation * preparation;
    let priceTotalMaterials = pricePencils + priceMarkers + pricePreparation;
    let priceDiscount = priceTotalMaterials - (priceTotalMaterials * (percent / 100));
    console.log(priceDiscount);
}
